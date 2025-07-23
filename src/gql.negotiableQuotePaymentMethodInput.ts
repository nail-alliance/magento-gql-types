import {String} from "./gql.string";
export type NegotiableQuotePaymentMethodInput = {
	code: String // Payment method code
	purchase_order_number?: String // The purchase order number. Optional for most payment methods.
}