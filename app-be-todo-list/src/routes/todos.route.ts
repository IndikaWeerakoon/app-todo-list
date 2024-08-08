import express from 'express';
import { todosController } from '../controllers/todos.controller';

const todoRouter = express.Router();

todoRouter.get('/todos', todosController.getTodos.bind(todosController))

export default todoRouter;