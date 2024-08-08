import { ForkEffect, call, put, takeLatest } from "redux-saga/effects";
import { todosActions } from "./todo-slice";
import { AxiosResponse } from "axios";
import { ITodoItem } from "./type/todo-type";
import { getTodos } from "../../api-requests/todos-api";

function* watchGetTodos({payload}: {payload: {searchTerm?: string}}) {
    try { 
        const todoResponse: AxiosResponse<ITodoItem[]> = yield call(getTodos, payload.searchTerm);
        yield put(todosActions.loadTodoItems(todoResponse.data));
    } catch (err) {
        yield put(todosActions.updateComponentState({isTodoFetchLoading: false}));
    }
}

export function* watchTodoSagas(): Generator<ForkEffect, void> {
    yield takeLatest(todosActions.getTodosAsync, watchGetTodos);
 }
  const todoSagas = watchTodoSagas;
  export default todoSagas;
  