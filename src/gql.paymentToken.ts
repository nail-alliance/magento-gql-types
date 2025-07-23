import {PaymentTokenTypeEnum} from "./gql.paymentTokenTypeEnum";
import {String} from "./gql.string";
export type PaymentToken = {
	details?: String // A description of the stored account details.
	payment_method_code: String // The payment method code associated with the token.
	public_hash: String // The public hash of the token.
	type: PaymentTokenTypeEnum // Specifies the payment token type.
}