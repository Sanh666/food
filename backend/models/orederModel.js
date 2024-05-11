import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, required: true, default: "Food Processing" },
    date: { type: Date, default: Date.now }, // Fixed the default value to set current date and time when a document is created
    payment: { type: Boolean, default: false } // Adjusted default value to false
});

const orderModel = mongoose.models.Order || mongoose.model("order", orderSchema); // Adjusted model name to start with capital letter for consistency

export default orderModel;
