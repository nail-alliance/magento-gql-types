import {String} from "./gql.string";
import {CancelOrderErrorCode} from "./gql.cancelOrderErrorCode";
export type CancelOrderError = {
	code: CancelOrderErrorCode // An error code that is specific to cancel order.
	message: String // A localized error message.
}