import {Boolean} from "./gql.boolean";
import {CustomerPaymentTokens} from "./gql.customerPaymentTokens";
export type DeletePaymentTokenOutput = {
	customerPaymentTokens?: CustomerPaymentTokens // A container for the customer's remaining payment tokens.
	result: Boolean // Indicates whether the request succeeded.
}