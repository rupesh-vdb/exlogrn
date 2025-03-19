import { add_to_cart, remove_from_cart } from "./constants";
const initialstate = [];
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case add_to_cart:
      return [...state, action.data];
    case remove_from_cart:
      let result = state.filter((item) => {
        return item.name != action.data.name;
      });
      return [...result];
    default:
      return state;
  }
};
