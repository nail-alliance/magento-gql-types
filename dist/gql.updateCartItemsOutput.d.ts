import { CartUserInputError } from "./gql.cartUserInputError";
import { Cart } from "./gql.cart";
export type UpdateCartItemsOutput = {
    cart: Cart;
    errors: [CartUserInputError];
};
