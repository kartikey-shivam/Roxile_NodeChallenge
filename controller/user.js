const axios = require("axios");

exports.userInfo = async (req, res) => {
  const userId = req.params.id;
  const userResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const userData = userResponse.data;
  const todoResponse = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const todoData = todoResponse.data;
  const todos = todoData.filter((todo) => todo.userId == userId);
  res.status(200).json({
    ...userData,
    todos,
  });
};
