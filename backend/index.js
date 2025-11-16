import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";

import mongoose from "mongoose";
import { serve } from "inngest/express";
import ticketRoutes from "./routes/ticket.js";
import { inngest } from "./inngest/client.js";
import { onUserSignup } from "./inngest/functions/on-signup.js";
import { onTicketCreated } from "./inngest/functions/on-ticket-create.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/tickets", ticketRoutes);

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [onUserSignup, onTicketCreated],
  })
);

connectDB();

app.listen(PORT, () => {
  console.log("connected to server");
});
