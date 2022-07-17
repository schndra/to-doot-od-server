import express from "express";
const router = express.Router();

import { getAllTodos, getAllTodosStatic } from "../controllers/todos.js";

router.route("/").get(getAllTodos);
router.route("/static").get(getAllTodosStatic);

export default router;
