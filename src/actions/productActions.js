import {
  FETCHING_PRODUCTS,
  SUCCESSFULLY_FETCHED_PRODUCTS,
  SEARCH_PRODUCT,
} from "./actionTypes";

const Url =
  "https://my-json-server.typicode.com/habilelabs/fake-products/products";

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: FETCHING_PRODUCTS });
  return fetch(Url)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({ type: SUCCESSFULLY_FETCHED_PRODUCTS, payload: responseJson });
      return Promise.resolve(responseJson);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const searchProduct = (text) => ({
  type: SEARCH_PRODUCT,
  payload: text,
});
