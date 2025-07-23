import { String } from "./gql.string";
import { CartUserInputErrorType } from "./gql.cartUserInputErrorType";
export type CartUserInputError = {
    code: CartUserInputErrorType;
    message: String;
};
