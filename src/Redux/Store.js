import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import itemsaga from "./itemsaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(itemsaga);
export default Store;
