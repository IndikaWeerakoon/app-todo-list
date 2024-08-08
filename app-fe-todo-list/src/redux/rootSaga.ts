import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import todoSagas from './todo/todo-saga';


export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([
    fork(todoSagas), 
  ]);
}