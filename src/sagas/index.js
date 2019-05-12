// import {  } from 'redux-saga';
import { take, put, call, fork, select,spawn, takeEvery, all, delay } from 'redux-saga/effects'
import Axios from "axios";
import { fetchPeopleSuccess } from '../actions/people.action';

export function* getAllPeople() {
  const people = yield call(fetchPeople);
  yield put(fetchPeopleSuccess(people));
}

function fetchPeople() {
  return Axios.get('http://localhost:8000/').then(result => result.data);
}

export default function* root() {
  yield all([spawn(getAllPeople), spawn(watchIncrementAsync), spawn(watchIncrAndStop)])
}

function* watchIncrementAsync() {
  yield takeEvery('COUNTER_INCREMENT', incrAsyncAction)
}

function* incrAsyncAction() {
  yield delay(4000);
  yield put({ type: 'ASYNC_COUNTER_INCREMENT' });
}

function* watchIncrAndStop() {
  while (true) {
    for (let i = 0; i < 3; i++) {
      const action = yield take('C_I')
    }
    yield put({ type: 'ASYNC_COUNTER_INCREMENT' });
  }
}