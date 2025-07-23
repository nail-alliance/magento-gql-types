import {String} from "./gql.string";
export type VaultMethodInput = {
	payment_source?: String // The payment source for the payment method
	payments_order_id?: String // The payment services order ID
	paypal_order_id?: String // PayPal order ID
	public_hash?: String // The public hash of the token.
}