import {BatchMutationStatus} from "./gql.batchMutationStatus";
import {CloseNegotiableQuoteOperationResult} from "./gql.closeNegotiableQuoteOperationResult";
import {NegotiableQuotesOutput} from "./gql.negotiableQuotesOutput";
import {NegotiableQuote} from "./gql.negotiableQuote";
export type CloseNegotiableQuotesOutput = {
	/** @deprecated */
	closed_quotes?: [NegotiableQuote] // An array containing the negotiable quotes that were just closed. Use operation_results instead. Deprecated
	negotiable_quotes?: NegotiableQuotesOutput // A list of negotiable quotes that can be viewed by the logged-in customer
	operation_results: [CloseNegotiableQuoteOperationResult] // An array of closed negotiable quote UIDs and details about any errors.
	result_status: BatchMutationStatus // The status of the request to close one or more negotiable quotes.
}