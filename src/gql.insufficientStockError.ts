import {Float} from "./gql.float";
import {String} from "./gql.string";
import {CartUserInputErrorType} from "./gql.cartUserInputErrorType";
export type InsufficientStockError = {
	code: CartUserInputErrorType // A cart-specific error code.
	message: String // A localized error message.
	quantity?: Float // Amount of available stock
}