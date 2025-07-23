import {String} from "./gql.string";
import {CartItemErrorType} from "./gql.cartItemErrorType";
export type CartItemError = {
	code: CartItemErrorType // An error code that describes the error encountered
	message: String // A localized error message
}