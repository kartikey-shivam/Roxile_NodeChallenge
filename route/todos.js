const express = require('express');
const app = express();
const router = express.Router();
const todo = require('../controller/todos');

router.route('/todos').get(todo.getTodos);

module.exports = router;