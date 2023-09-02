import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import morgan from "morgan"
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 8080;
// configure env
dotenv.config()

// database config
connectDB()

// rest object
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
// Create Products
app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)

// rest api
app.get('/', (req, res) => {
    res.send("<h2>Welcom to Amar</h2>");
})

app.listen(port, () => {
    console.log(`Sever is runnig on ${process.env.DEV_MODE} ${port}`)
})