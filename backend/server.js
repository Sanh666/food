import express from "express"
import cors from "cors"
import { connectDB } from "../backend/config/db.js"
import foodRouter from "../backend/routes/foodRoute.js"
import userRouter from "../backend/routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
// app config
const app = express()
const port = 4000
// middleware
app.use(express.json())
app.use(cors({ credentials: true, origin: true, exposedHeaders: '*' })
);
//connectDB
connectDB();
//api endpoint
app.use("/api/order", orderRouter)
app.use("/api/cart", cartRouter)
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.get("/", (req, res) => {
    res.send("API Working")
})
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})