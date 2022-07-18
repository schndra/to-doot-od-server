import Todo from "../models/Todo.js";

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  return res.status(201).json({ todo });
};
const getAllTodosStatic = async (req, res) => {
  throw new Error("testing async error");
  return res.status(200).json({ msg: "todos testing route" });
};

const getAllTodos = async (req, res) => {
  return res.status(200).json({ msg: "get all todos" });
};

export { getAllTodosStatic, getAllTodos, createTodo };
