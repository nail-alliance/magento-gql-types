import { String } from "./gql.string";
import { CartItemErrorType } from "./gql.cartItemErrorType";
export type CartItemError = {
    code: CartItemErrorType;
    message: String;
};
