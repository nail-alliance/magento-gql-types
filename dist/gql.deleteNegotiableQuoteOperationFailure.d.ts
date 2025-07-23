import { ID } from "./gql.ID";
import { DeleteNegotiableQuoteError } from "./gql.deleteNegotiableQuoteError";
export type DeleteNegotiableQuoteOperationFailure = {
    errors: DeleteNegotiableQuoteError[];
    quote_uid: ID;
};
