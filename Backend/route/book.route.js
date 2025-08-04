 import express from "express";
// import { getBook } from "../controller/book.controller.js";

// const router = express.Router();

// router.get("/", getBook);

// export default router;import express from "express";
import { getBook, createBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/createbooks", createBook);

export default router;