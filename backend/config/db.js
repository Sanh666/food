import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://s0165671254:m9oEa24gx7CD4DxZ@cluster0.tfdi29t.mongodb.net/coffeshop');
        console.log('DB connected');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
