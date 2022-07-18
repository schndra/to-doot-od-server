import express from "express";
const router = express.Router();

import {
  getAllTodos,
  getAllTodosStatic,
  createTodo,
} from "../controllers/todos.js";

router.route("/").get(getAllTodos).post(createTodo);
router.route("/static").get(getAllTodosStatic);

export default router;
