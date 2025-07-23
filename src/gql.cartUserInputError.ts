import {String} from "./gql.string";
import {CartUserInputErrorType} from "./gql.cartUserInputErrorType";
export type CartUserInputError = {
	code: CartUserInputErrorType // A cart-specific error code.
	message: String // A localized error message.
}