import {NegotiableQuoteShippingAddressInput} from "./gql.negotiableQuoteShippingAddressInput";
import {ID} from "./gql.ID";
export type SetNegotiableQuoteShippingAddressInput = {
	customer_address_id?: ID // The unique ID of a CustomerAddress object.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
	shipping_addresses?: [NegotiableQuoteShippingAddressInput] // An array of shipping addresses to apply to the negotiable quote.
}