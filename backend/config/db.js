import mongoose from "mongoose";

export const connectDB = async () =>{
    try  {
        const Connect =await mongoose.connect(`${process.env.MONGODB_CONNECTION_URL}`)
        console.log("MongoDB Connected");
        
    }catch(error){
        console.log("MongoDB won't Connected", error);
        
    }
    
}