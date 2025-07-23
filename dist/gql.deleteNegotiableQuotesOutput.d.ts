import { BatchMutationStatus } from "./gql.batchMutationStatus";
import { DeleteNegotiableQuoteOperationResult } from "./gql.deleteNegotiableQuoteOperationResult";
import { NegotiableQuotesOutput } from "./gql.negotiableQuotesOutput";
export type DeleteNegotiableQuotesOutput = {
    negotiable_quotes?: NegotiableQuotesOutput;
    operation_results: [DeleteNegotiableQuoteOperationResult];
    result_status: BatchMutationStatus;
};
