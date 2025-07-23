import { String } from "./gql.string";
import { CartUserInputErrorType } from "./gql.cartUserInputErrorType";
export type Error = {
    code: CartUserInputErrorType;
    message: String;
};
