import "dotenv/config";
import express from "express";
import { DBConnect } from "./db/db.js";
const app = express();
DBConnect();
app.get("/", (req, res) => {
    res.json({
        message: "get endpoint.",
    });
});
app.post("/create-user", async (req, res) => {
});
app.listen(3000, () => {
    console.log("Backend is running on posrt 3000");
});
//# sourceMappingURL=index.js.map