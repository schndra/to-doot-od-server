const getAllTodosStatic = async (req, res) => {
  return res.status(200).json({ msg: "todos testing route" });
};

const getAllTodos = async (req, res) => {
  return res.status(200).json({ msg: "get all todos" });
};

export { getAllTodosStatic, getAllTodos };
