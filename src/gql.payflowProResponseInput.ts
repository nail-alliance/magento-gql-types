import {String} from "./gql.string";
export type PayflowProResponseInput = {
	cart_id: String // The unique ID that identifies the shopper's cart.
	paypal_payload: String // The payload returned from PayPal.
}