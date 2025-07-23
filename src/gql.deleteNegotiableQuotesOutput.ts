import {BatchMutationStatus} from "./gql.batchMutationStatus";
import {DeleteNegotiableQuoteOperationResult} from "./gql.deleteNegotiableQuoteOperationResult";
import {NegotiableQuotesOutput} from "./gql.negotiableQuotesOutput";
export type DeleteNegotiableQuotesOutput = {
	negotiable_quotes?: NegotiableQuotesOutput // A list of negotiable quotes that the customer can view
	operation_results: [DeleteNegotiableQuoteOperationResult] // An array of deleted negotiable quote UIDs and details about any errors.
	result_status: BatchMutationStatus // The status of the request to delete one or more negotiable quotes.
}