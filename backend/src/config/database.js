import mongoose from "mongoose";2
const connectDB = async()=> { 
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB Connected !!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDb Failed Connection",error);
        process.exit(1)
    }
}
export default connectDB;