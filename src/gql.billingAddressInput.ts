import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
import {CartAddressInput} from "./gql.cartAddressInput";
export type BillingAddressInput = {
	address?: CartAddressInput // Defines a billing address.
	customer_address_id?: Int // An ID from the customer's address book that uniquely identifies the address to be used for billing.
	same_as_shipping?: Boolean // Indicates whether to set the billing address to be the same as the existing shipping address on the cart.
	use_for_shipping?: Boolean // Indicates whether to set the shipping address to be the same as this billing address.
}