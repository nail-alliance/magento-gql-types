import {String} from "./gql.string";
import {KeyValue} from "./gql.keyValue";
export type OrderPaymentMethod = {
	additional_data?: KeyValue[] // Additional data per payment method type.
	name: String // The label that describes the payment method.
	type: String // The payment method code that indicates how the order was paid for.
}