import {PaymentMethodInput} from "./gql.paymentMethodInput";
import {String} from "./gql.string";
export type SetPaymentMethodOnCartInput = {
	cart_id: String // The unique ID of a Cart object.
	payment_method: PaymentMethodInput // The payment method data to apply to the cart.
}