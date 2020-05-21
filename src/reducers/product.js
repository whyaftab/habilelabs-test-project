import {
  SUCCESSFULLY_FETCHED_PRODUCTS,
  FETCHING_PRODUCTS,
  SEARCH_PRODUCT,
} from "../actions";
import { RefactorDataObj } from "../constant";

const initState = {
  rowData: [],
  data: [],
  searchText: "",
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return { ...initState, loading: true };

    case SUCCESSFULLY_FETCHED_PRODUCTS:
      const newData = RefactorDataObj(action.payload);
      return { ...initState, rowData: action.payload, data: newData };

    case SEARCH_PRODUCT:
      const filteredObj = state.rowData.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      const searchedData = RefactorDataObj(filteredObj);
      return { ...state, searchText: action.payload, data: searchedData };

    default:
      return state;
  }
};
