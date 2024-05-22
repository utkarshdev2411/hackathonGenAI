import mongoose from 'mongoose'

const db = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/kareAI")
        console.log(`MongoDB Connected Successfully !! DB HOST: ${connectionInstance.connection.host}`)

    } catch (err) {
        console.log(err.message + "\nfailed to connect to Database ")
        process.exit(1)
    }
}

export default db
