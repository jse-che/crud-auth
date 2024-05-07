import mongoose from 'mongoose';

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://jseche98:Jose101198.@crud.lklsbk5.mongodb.net/')
        console.log(">>> DB is Connected")
    } catch (error) {
        console.log(error)
    }
}