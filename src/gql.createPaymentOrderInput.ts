import {Boolean} from "./gql.boolean";
import {PaymentLocation} from "./gql.paymentLocation";
import {String} from "./gql.string";
export type CreatePaymentOrderInput = {
	cartId: String // The customer cart ID
	location: PaymentLocation // Defines the origin location for that payment request
	methodCode: String // The code for the payment method used in the order
	paymentSource: String // The identifiable payment source for the payment method
	vaultIntent?: Boolean // Indicates whether the payment information should be vaulted
}