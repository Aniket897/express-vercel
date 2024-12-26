import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  console.log("req comming");
  resp.status(200).json({ message: "Hello World" });
});

app.get("/:user", (req, resp) => {
  resp.status(200).json({
    user: req.query.user,
  });
});

app.listen(PORT, () => {
  console.log("first server is running on port 8080");
});
