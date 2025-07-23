import {ClearCartErrorType} from "./gql.clearCartErrorType";
import {String} from "./gql.string";
export type ClearCartError = {
	message: String // A localized error message
	type: ClearCartErrorType // A cart-specific error type.
}