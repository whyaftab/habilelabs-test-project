import { FETCHING_PRODUCTS, FETCH_PRODUCTS } from "./actionTypes";
import Axios from "axios";
const Url =
  "https://my-json-server.typicode.com/habilelabs/fake-products/products";

export const fetchProducts = () => (dispatch) => {
  console.log("ccale");
  dispatch({ type: FETCHING_PRODUCTS });
  return Axios.get(Url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((responseJson) => {
      console.log("in");

      dispatch({ type: FETCH_PRODUCTS, payload: responseJson.data });
      return Promise.resolve(responseJson.data);
    })
    .catch((error) => {
      console.log("no");

      return Promise.reject(error);
    });
};
