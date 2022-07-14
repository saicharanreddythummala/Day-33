import express from "express";
import fs from "file-system";
const router = express.Router();

router.get("/", (req, res) => {
  const files = fs.readdirSync("models");
  let arr = [];
  files.forEach((file) => {
    let name = {
      FIle_name: file,
    };
    arr.push(name);
  });
  res.send(arr);
});

export const getFilesRouter = router;
