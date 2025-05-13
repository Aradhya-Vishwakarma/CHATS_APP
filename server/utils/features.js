import mongoose from "mongoose"

const connectDB = (uri)=>{
    mongoose.connect(uri ,{dbName: "CHATAPP"}).then((data) => console.log(`Connected to DB: ${data.connection.host }`)).catch((err) => {
        console.log(err)
        throw new Error("Database connection failed")   

    })
}
export {connectDB}