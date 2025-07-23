import {String} from "./gql.string";
import {PlaceOrderErrorCodes} from "./gql.placeOrderErrorCodes";
export type PlaceOrderError = {
	code: PlaceOrderErrorCodes // An error code that is specific to place order.
	message: String // A localized error message.
}