import {ID} from "./gql.ID";
import {NegotiableQuotePaymentMethodInput} from "./gql.negotiableQuotePaymentMethodInput";
export type SetNegotiableQuotePaymentMethodInput = {
	payment_method: NegotiableQuotePaymentMethodInput // The payment method to be assigned to the negotiable quote.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
}