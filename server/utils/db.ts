import mongoose from "mongoose";
require('dotenv').config();

const dbURL: string= process.env.DB_URL || '';

const connectDB= async()=> {
    try {
        await mongoose.connect(dbURL).then((data:any)=>{
            console.log(`database connected successfully with ${data.connection.host}`)

   
        })
        
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        setTimeout(connectDB, 5000);
            
        
    }

}
export default connectDB