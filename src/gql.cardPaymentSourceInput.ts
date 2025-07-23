import {String} from "./gql.string";
import {BillingAddressPaymentSourceInput} from "./gql.billingAddressPaymentSourceInput";
export type CardPaymentSourceInput = {
	billing_address: BillingAddressPaymentSourceInput // The billing address of the card
	name?: String // The name on the cardholder
}