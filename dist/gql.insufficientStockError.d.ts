import { Float } from "./gql.float";
import { String } from "./gql.string";
import { CartUserInputErrorType } from "./gql.cartUserInputErrorType";
export type InsufficientStockError = {
    code: CartUserInputErrorType;
    message: String;
    quantity?: Float;
};
