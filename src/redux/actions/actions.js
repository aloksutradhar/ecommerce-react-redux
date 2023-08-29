export const productListingApi = () => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    dispatch({ type: "FETCH_PRODUCTS", payload: data });
  } catch (error) {
    console.log("throw an error", error);
    throw error;
  }
};

export const selectedProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    dispatch({ type: "SELECTED_PRODUCT", payload: data });
  } catch (error) {
    console.log("throw an error", error);
    throw error;
  }
};

export const removeSelectedProduct = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCT"
  };
};

export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
};
// export const totalPrice = (total) => {
//   return {
//     type: "TOTAL_PRICE_CART",
//     payload: total
//   };
// };
