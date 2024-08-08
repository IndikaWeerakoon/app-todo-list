import { Request, Response } from "express";
import { TodosService } from "../services/todos.service";
import { Logger } from "../utils/logger";

class TodosController {
    private todoService: TodosService;
    private logger: Logger;

    constructor() {
      this.logger = new Logger();
      this.todoService = new TodosService(this.logger);
    }

    public getTodos(req: Request, res: Response): void {
      this.logger.request = req;
      const searchTerm = req.params['searchTerm']
      const todos = this.todoService.getTodos(searchTerm);
      res.json(todos);
    }

  }
  
  export const todosController = new TodosController();