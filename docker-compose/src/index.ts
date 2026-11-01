import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "get endpoint.",
  });
});

app.listen(3000, () => {
  console.log("Backend is running on posrt 3000");
});
