import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
export type HostedFieldsInput = {
	cardBin?: String // Card bin number
	cardExpiryMonth?: String // Expiration month of the card
	cardExpiryYear?: String // Expiration year of the card
	cardLast4?: String // Last four digits of the card
	holderName?: String // Name on the card
	is_active_payment_token_enabler?: Boolean // Indicates whether details about the shopper's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for the Payment Services payment integration.
	payment_source?: String // The payment source for the payment method
	payments_order_id?: String // The payment services order ID
	paypal_order_id?: String // PayPal order ID
}