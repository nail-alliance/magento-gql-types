import {String} from "./gql.string";
import {PaymentSourceOutput} from "./gql.paymentSourceOutput";
export type CreateVaultCardPaymentTokenOutput = {
	payment_source: PaymentSourceOutput // The payment source information
	vault_token_id: String // The vault payment token information
}