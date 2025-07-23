import { ID } from "./gql.ID";
import { NegotiableQuoteCommentInput } from "./gql.negotiableQuoteCommentInput";
export type SendNegotiableQuoteForReviewInput = {
    comment?: NegotiableQuoteCommentInput;
    quote_uid: ID;
};
