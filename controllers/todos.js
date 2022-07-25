import Todo from "../models/Todo.js";

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  return res.status(201).json({ todo, msg: "successfully create todo" });
};
const getAllTodosStatic = async (req, res) => {
  // throw new Error("testing async error");
  const todo = await Todo.find({});
  return res.status(200).json({ todo });
};

const getAllTodos = async (req, res) => {
  const todo = await Todo.find({});
  return res.status(200).json({ todo });
};

export { getAllTodosStatic, getAllTodos, createTodo };
