import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoItem, ITodoList } from "./type/todo-type";

const initialState: ITodoList = {
    componentState: {},
    items: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        loadTodoItems: (state, action: PayloadAction<ITodoItem[]>) => {
            state.items = action.payload;
            state.componentState.isTodoFetchLoading = true;
        },
        updateComponentState: (state, action: PayloadAction<{[name: string]: undefined| string| boolean}>) => {
            state.componentState = action.payload;
        },
        getTodosAsync: (state, _action: PayloadAction<{searchTerm?: string}>) => {
            state.componentState.isTodoFetchLoading = true;
        }

    }
})

const todosActions = todoSlice.actions;
const todosReducer = todoSlice.reducer;

export { todosActions, todosReducer };
