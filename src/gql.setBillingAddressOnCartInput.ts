import {String} from "./gql.string";
import {BillingAddressInput} from "./gql.billingAddressInput";
export type SetBillingAddressOnCartInput = {
	billing_address: BillingAddressInput // The billing address.
	cart_id: String // The unique ID of a Cart object.
}