import express from "express";
import fs from "file-system";
import path from "path";
const router = express.Router();

router.get("/", (req, res) => {
  const date = new Date().toLocaleDateString("en-US").split("/").join("-");
  const time = new Date().toLocaleTimeString().split(":").join("-");
  const timeStamp = `Timestamp: ${time} ${date} `;
  const date_time = `${date}_${time}`;
  fs.writeFile(
    `models/${date_time.split(" ").join("")}.txt`,
    timeStamp,
    (err) => {
      if (!err) {
        res.send("File created successfully");
      } else {
        console.log(err);
        res.send(err.message);
      }
    }
  );
});

export const createFileRouter = router;
