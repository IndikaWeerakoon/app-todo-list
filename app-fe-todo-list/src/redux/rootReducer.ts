import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from './todo/todo-slice';

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;