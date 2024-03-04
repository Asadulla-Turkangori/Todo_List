
const express = require('express');

const ListController = require('../Controller/todolist');

const todolistRoute = express.Router();

todolistRoute.get('/',ListController.getAllLists);

todolistRoute.post('/',ListController.insertList);

todolistRoute.put('/',ListController.updateList);

todolistRoute.delete('/:id',ListController.deleletList);

todolistRoute.put('/:id',ListController.updateActive);

module.exports = todolistRoute;