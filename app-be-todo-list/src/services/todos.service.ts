import { Todos } from "../modals/todos";
import { Logger } from "../utils/logger";

export class TodosService {
    public todos: Todos[];
    public lastTodoId: number;

    constructor(private logger: Logger) {
        this.lastTodoId = 1;
        this.todos = [{
            id: this.lastTodoId,
            title: 'Create todo list',
            status: true
        }]
    }

    public getTodos(searchTerm?: string) {
        this.logger.log('Get todos');
        if (!searchTerm || searchTerm === '') {
            return this.todos;
        }

        return this.todos.filter(item => item.title.includes(searchTerm));
    }
}