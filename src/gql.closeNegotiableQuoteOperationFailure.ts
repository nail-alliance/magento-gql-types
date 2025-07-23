import {ID} from "./gql.ID";
import {CloseNegotiableQuoteError} from "./gql.closeNegotiableQuoteError";
export type CloseNegotiableQuoteOperationFailure = {
	errors: [CloseNegotiableQuoteError] // An array of errors encountered while attempting close the negotiable quote.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
}