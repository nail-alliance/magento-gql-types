import {String} from "./gql.string";
export type SelectedPaymentMethod = {
	code: String // The payment method code.
	purchase_order_number?: String // The purchase order number.
	title: String // The payment method title.
}