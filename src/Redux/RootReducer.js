import { combineReducers } from "redux";
import itemData from "./Reducer";

// export default combineReducers({
//   itemData,
// });
const RootReducer = combineReducers({
  itemData,
});

export default RootReducer;
