import {ShippingMethodInput} from "./gql.shippingMethodInput";
import {ID} from "./gql.ID";
export type SetNegotiableQuoteShippingMethodsInput = {
	quote_uid: ID // The unique ID of a NegotiableQuote object.
	shipping_methods: ShippingMethodInput[] // An array of shipping methods to apply to the negotiable quote.
}