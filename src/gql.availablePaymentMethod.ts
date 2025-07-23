import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
export type AvailablePaymentMethod = {
	code: String // The payment method code.
	is_deferred: Boolean // If the payment method is an online integration
	title: String // The payment method title.
}