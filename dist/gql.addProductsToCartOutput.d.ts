import { Error } from "./gql.error";
import { Cart } from "./gql.cart";
export type AddProductsToCartOutput = {
    cart: Cart;
    user_errors: Error[];
};
