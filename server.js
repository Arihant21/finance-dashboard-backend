import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import recordRoutes from "./routes/recordRoute.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
    
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);  
});
