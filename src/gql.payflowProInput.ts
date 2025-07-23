import {Boolean} from "./gql.boolean";
import {CreditCardDetailsInput} from "./gql.creditCardDetailsInput";
export type PayflowProInput = {
	cc_details: CreditCardDetailsInput // Required input for credit card related information.
	is_active_payment_token_enabler?: Boolean // Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the PayPal Payflow Pro payment integration.
}