const initialState = {
  products: []
};

export const productListingReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SELECTED_PRODUCT":
      return { ...state, ...payload };
    case "REMOVE_SELECTED_PRODUCT":
      return {};
    default:
      return state;
  }
};
