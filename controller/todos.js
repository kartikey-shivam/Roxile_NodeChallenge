const axios = require("axios");
exports.getTodos = async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  let responseData = response.data;
  responseData = responseData.map((el) => {
    return { id: el.id, title: el.title, completed: el.completed };
  });
  res.status(200).send(responseData);
};
