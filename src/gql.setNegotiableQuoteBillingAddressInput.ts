import {ID} from "./gql.ID";
import {NegotiableQuoteBillingAddressInput} from "./gql.negotiableQuoteBillingAddressInput";
export type SetNegotiableQuoteBillingAddressInput = {
	billing_address: NegotiableQuoteBillingAddressInput // The billing address to be added.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
}