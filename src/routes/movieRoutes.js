import { Router } from "express";

const router = Router();

router.get("/new", (req, res) => {
  res.status(200).send({ msg: "movie list" });
});

export default router;
