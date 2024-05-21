import db from "./config/mongoose.connection.js"
import app from "./app.js"

db()
.then(() => {
    app.on("error", (error) => {
        console.log("Server Error: ", error)
    })
    app.listen(8000, () => {
        console.log(`Server is started`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err)
})
