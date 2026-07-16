import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import { config } from "dotenv";

const app = express();
app.use("/api", movieRoutes);
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
  res.status(200).send({ data: { name: "Lawal Toheeb", sex: "Male" } });
});

app.listen(PORT, () => {
  console.log("Server running on PORT 5000");
});
