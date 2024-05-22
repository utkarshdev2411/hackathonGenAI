import mongoose from 'mongoose'

const db = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://ConsoleDev19:WuJQvkyZL6b8dN89@cluster0.rfekipa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`MongoDB Connected Successfully !! DB HOST: ${connectionInstance.connection.host}`)

    } catch (err) {
        console.log(err.message + "\nfailed to connect to Database ")
        process.exit(1)
    }
}

export default db