import {String} from "./gql.string";
export type GooglePayMethodInput = {
	payment_source?: String // The payment source for the payment method
	payments_order_id?: String // The payment services order ID
	paypal_order_id?: String // PayPal order ID
}