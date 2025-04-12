import express from "express";

const router = express.Router();

router.get("/commands", (req, res) => {
  res.send("got");
});

router.post("/", (req, res) => {
  res.send("posted")
});

router.delete("/", (req, res) => {
  res.send("deleted");
});



export default router;
