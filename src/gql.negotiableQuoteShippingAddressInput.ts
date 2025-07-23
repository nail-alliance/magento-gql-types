import {String} from "./gql.string";
import {ID} from "./gql.ID";
import {NegotiableQuoteAddressInput} from "./gql.negotiableQuoteAddressInput";
export type NegotiableQuoteShippingAddressInput = {
	address?: NegotiableQuoteAddressInput // A shipping address.
	customer_address_uid?: ID // An ID from the company user's address book that uniquely identifies the address to be used for shipping.
	customer_notes?: String // Text provided by the company user.
}