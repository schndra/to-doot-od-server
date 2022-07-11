const noFoundMiddleware = (req, res) => {
  res.status(404).send("page not found");
};

export default noFoundMiddleware;
