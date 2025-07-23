import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { NegotiableQuoteCommentInput } from "./gql.negotiableQuoteCommentInput";
import { ID } from "./gql.ID";
export type RequestNegotiableQuoteInput = {
    cart_id: ID;
    comment: NegotiableQuoteCommentInput;
    is_draft?: Boolean;
    quote_name: String;
};
