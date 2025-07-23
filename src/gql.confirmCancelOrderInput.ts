import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ConfirmCancelOrderInput = {
	confirmation_key: String // Confirmation Key to cancel the order.
	order_id: ID // The unique ID of an Order type.
}