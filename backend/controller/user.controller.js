import userModel from "../model/user.model.js";
import { StatusCodes } from 'http-status-codes'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const createUser = async (req, res) => {
    const { name, email, password } = req.body

    const availablUser = await userModel.findOne({ email })
    if (availablUser) {
        res.status(StatusCodes.CONFLICT)
    }
    else {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) res.status(StatusCodes.EXPECTATION_FAILED).json({ message: "something went wrong" })
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) res.status(StatusCodes.EXPECTATION_FAILED).json({ message: "something went wrong" })
                const user = await userModel.create({
                    name,
                    email, password: hash
                })
                if (!user) {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" })
                }

                const token = jwt.sign({ email }, 'secret')
                res
                    .status(StatusCodes.CREATED)
                    .cookie("token", token)
                    .json({
                        token,
                        user
                    })
            })
        })
    }

}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ email }, 'secret')
                res
                    .cookie("token", token)
                    .json({
                        token,
                        user
                    })
            }
            else {
                res.status(StatusCodes.UNAUTHORIZED).json({ message: "unauthorized access" })

            }
        })
    }
    else {
        res.status(StatusCodes.UNAUTHORIZED).json({ message: "unauthorized access" })
    }
}

export const logout = (req, res) => {
    res.cookie("token", "").json({ message: "logout successfully" })
}

export const getCurrentUser = async (req, res) => {
    try {
        const data = req.user;
        const user = await userModel.findOne({ email: data.email })
        console.log(user)
    } catch (error) {
        res.josn({ err })
    }

}

export const userMiddleware = (req, res, next) => {

    const cookie = req.cookies.token;
    if (cookie == "") {
        res
            .status(StatusCodes.UNAUTHORIZED)
            .json({
                message: "unauthorized access"
            })
    }
    else {
        const user = jwt.verify(cookie, "secret")
        req.user = user;
        next()
    }
}