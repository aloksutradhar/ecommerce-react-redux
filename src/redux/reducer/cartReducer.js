const initialState = {
  products: [],
  price: 0
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, products: [...state.products, { ...payload }] };
    case "REMOVE_FROM_CART":
      const data = state.products.filter((ele) => ele.id !== payload);
      return {
        ...state,
        products: data
      };
    default:
      return state;
  }
};
