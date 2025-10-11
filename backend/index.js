import express from "express";
import cors from "cors";
import connectDB from "./db";

const PORT = process.env.PORT;
const app = expres();
app.use(cors());

app.use(express.json());

connectDB();

app.listen(PORT, () => {
  console.log("connected to server");
});
