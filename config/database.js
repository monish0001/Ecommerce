import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const connectDB = async () => {
   
        try{

            const conn=mongoose.connect(process.env.MONGODB_URL);
            console.log(`Connected to mongo DB`);

        }catch(error){
            console.log(`Error in mongo DB ${error}`);
        }
};

export default connectDB;