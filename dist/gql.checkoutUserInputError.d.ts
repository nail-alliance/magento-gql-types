import { String } from "./gql.string";
import { CheckoutUserInputErrorCodes } from "./gql.checkoutUserInputErrorCodes";
export type CheckoutUserInputError = {
    code: CheckoutUserInputErrorCodes;
    message: String;
    path: [String];
};
