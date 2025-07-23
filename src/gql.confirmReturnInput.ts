import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ConfirmReturnInput = {
	confirmation_key: String // Confirmation Key to return order.
	order_id: ID // The unique ID of an Order type.
}