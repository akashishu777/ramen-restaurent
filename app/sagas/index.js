import { call, put, take, fork, cancel, race } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import fetch from 'isomorphic-fetch'

// this will fetch successed
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const URL = 'http://starlord.hackerearth.com/TopRamen'

export function getData() {
  return fetch(proxyurl + URL).then(response => response.json())
}

export function* fetchData() {
  try {
    const data = yield call(getData);
    yield put({type: 'FETCH_SUCCEEDED', data});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error.toString()});
  }
}

function* fetchDataSaga() {
  yield takeLatest('FETCH_ASYNC', fetchData)
}


export default function* root() {
  yield fetchDataSaga()
}