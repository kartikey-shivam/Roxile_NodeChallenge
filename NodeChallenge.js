const express = require("express");
const app = express();
const todoRoute = require("./route/todos");
const userRoute = require("./route/user");

app.use(todoRoute);
app.use(userRoute);

const server = app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
