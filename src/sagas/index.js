import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
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
  yield all([fork(getAllPeople)])
}