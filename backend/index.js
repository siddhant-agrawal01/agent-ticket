import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import dotenv from "dotenv";


dotenv.config()
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.json());

connectDB();

app.listen(PORT, () => {
  console.log("connected to server");
});

