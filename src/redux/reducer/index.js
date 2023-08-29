import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productListingReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";

const reducer = combineReducers({
  allProducts: productListingReducer,
  selectedProduct: selectedProductReducer,
  cart: cartReducer
});

export default reducer;
