import {Boolean} from "./gql.boolean";
import {ID} from "./gql.ID";
import {NegotiableQuoteAddressInput} from "./gql.negotiableQuoteAddressInput";
export type NegotiableQuoteBillingAddressInput = {
	address?: NegotiableQuoteAddressInput // Defines a billing address.
	customer_address_uid?: ID // The unique ID of a CustomerAddress object.
	same_as_shipping?: Boolean // Indicates whether to set the billing address to be the same as the existing shipping address on the negotiable quote.
	use_for_shipping?: Boolean // Indicates whether to set the shipping address to be the same as this billing address.
}