import { BatchMutationStatus } from "./gql.batchMutationStatus";
import { CloseNegotiableQuoteOperationResult } from "./gql.closeNegotiableQuoteOperationResult";
import { NegotiableQuotesOutput } from "./gql.negotiableQuotesOutput";
import { NegotiableQuote } from "./gql.negotiableQuote";
export type CloseNegotiableQuotesOutput = {
    /** @deprecated */
    closed_quotes?: NegotiableQuote[];
    negotiable_quotes?: NegotiableQuotesOutput;
    operation_results: CloseNegotiableQuoteOperationResult[];
    result_status: BatchMutationStatus;
};
