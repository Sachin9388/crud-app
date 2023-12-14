import { takeEvery, put, call } from "redux-saga/effects";
import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_EDIT_ITEM,
  FETCH_GET_API,
  SET_FETCH_API,
} from "./Action";
import { deleteAPI, getAPI, postAPI, updateAPI } from "../Api/apiService";

function* getaddItem(data) {
  const postdata = data?.payload;
  // console.log("Saga Get Post Data:", data?.payload);
  const postapiData = yield call(postAPI, postdata);
  yield call(sagafetchgetapi);
  // console.log("Saga Get Add Item:", postapiData);
}
function* geteditItem(data) {
  // const geteditdata = data?.payload;
  const updatedata = data?.payload;
  console.log("Saga Get Update Data:", updatedata);
  const updateapidata = yield call(updateAPI, updatedata);
  yield call(sagafetchgetapi);
  console.log("Saga Get Update Item", updateapidata);
  // yield put({ type: SET_EDIT_ITEM, geteditdata });
}
function* getdeleteItem(id) {
  console.log("Saga Get Delete Data:", id);
  const deletedata = yield call(deleteAPI, id);
  yield call(sagafetchgetapi);
  console.log("Saga Get Delete Item:", deletedata);
}
function* sagafetchgetapi() {
  const callapi = yield call(getAPI);
  // console.log("Saga Get Fetch Get API",callapi);
  yield put({ type: SET_FETCH_API, callapi });
}

function* itemsaga() {
  yield takeEvery(ADD_ITEM, getaddItem);
  yield takeEvery(EDIT_ITEM, geteditItem);
  yield takeEvery(DELETE_ITEM, getdeleteItem);
  yield takeEvery(FETCH_GET_API, sagafetchgetapi);
}

export default itemsaga;
