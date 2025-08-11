import mongoose from "mongoose";

const dbConnect= async()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("Connect Successfully"))
    .catch((err)=>console.log("Error in DB Connection: ", err));
}

export default dbConnect;