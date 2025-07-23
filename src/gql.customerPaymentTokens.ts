import {PaymentToken} from "./gql.paymentToken";
export type CustomerPaymentTokens = {
	items: [PaymentToken] // An array of payment tokens.
}