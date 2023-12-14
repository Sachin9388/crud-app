export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const SET_ADD_ITEM = "SET_ADD_ITEM";
export const SET_EDIT_ITEM = "SET_EDIT_ITEM";
export const SET_DELETE_ITEM = "SET_DELETE_ITEM";
export const FETCH_GET_API = "FETCH_GET_API";
export const SET_FETCH_API = "SET_FETCH_API";

export const AddItem = (data) => {
  // console.log("Action Called", data);
  return {
    type: ADD_ITEM,
    payload: data,
  };
};
export const EditItem = (data) => {
  // console.log("Action Edited", data);
  return {
    type: EDIT_ITEM,
    payload: data,
  };
};

export const DeleteItem = (userId) => {
  // console.log("Action Deleted", userId);
  return {
    type: DELETE_ITEM,
    payload: userId,
  };
};
export const fetchGetAPI = () => {
  // console.log("Fetch Get Api", data);
  return {
    type: FETCH_GET_API,
    // payload: ,
  };
};
