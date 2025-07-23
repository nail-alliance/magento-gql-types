import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type CancelOrderInput = {
	order_id: ID // The unique ID of an Order type.
	reason: String // Cancellation reason.
}