import {add_to_cart, remove_from_cart} from './constants';
export function addtocart(item) {
  return {
    type: add_to_cart,
    data: item
  };
}
export function removefromcart(item) {
  return {
    type: remove_from_cart,
    data: item
  };
}