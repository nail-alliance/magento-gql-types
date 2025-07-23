import { ID } from "./gql.ID";
import { CloseNegotiableQuoteError } from "./gql.closeNegotiableQuoteError";
export type CloseNegotiableQuoteOperationFailure = {
    errors: [CloseNegotiableQuoteError];
    quote_uid: ID;
};
