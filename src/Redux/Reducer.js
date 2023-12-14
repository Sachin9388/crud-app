import {
  SET_ADD_ITEM,
  SET_EDIT_ITEM,
  SET_DELETE_ITEM,
  SET_FETCH_API,
} from "./Action";

const initialState = {
  submittedData: [],
};

const itemData = (state = initialState, action) => {
  switch (action.type) {
    // case SET_ADD_ITEM:
    //   // console.log("Saga Set Reducer called", action?.data?.payload);
    //   const setdata = action?.data?.payload;
    //   return {
    //     ...state,
    //     submittedData: [...state.submittedData, setdata],
    //   };

    // case SET_EDIT_ITEM:
    //   // console.log("Saga Set Reducer Edited", action?.geteditdata);
    //   const updatedData = state.submittedData.map((item) =>
    //     item.id === action?.geteditdata?.id ? action?.geteditdata : item
    //   );
    //   return {
    //     ...state,
    //     submittedData: updatedData,
    //   };

    // case SET_DELETE_ITEM:
    //   // console.log("Saga Set Reducer Deleted",action?.userid);
    //   const filteredData = state.submittedData.filter(
    //     (item) => item?.id !== action?.userid
    //   );
    //   return {
    //     ...state,
    //     submittedData: filteredData,
    //   };

    case SET_FETCH_API:
      // console.log("Saga Set Fetch Get API", action?.callapi?.data);

      return {
        ...state,
        submittedData: action?.callapi?.data,
      };

    default:
      return state;
  }
};

export default itemData;
