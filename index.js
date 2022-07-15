import express from "express";
import { createFileRouter } from "./routes/createFile.js";
import { getFilesRouter } from "./routes/getFiles.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//PORT number in .env
const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Home page");
});

//using routers
app.use("/create_File", createFileRouter);
app.use("/get_Files", getFilesRouter);

app.listen(PORT);
console.log(`App started at ${PORT}`);
