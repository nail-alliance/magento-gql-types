import { ID } from "./gql.ID";
import { NegotiableQuoteCommentCreatorType } from "./gql.negotiableQuoteCommentCreatorType";
import { String } from "./gql.string";
import { NegotiableQuoteUser } from "./gql.negotiableQuoteUser";
export type NegotiableQuoteComment = {
    author: NegotiableQuoteUser;
    created_at: String;
    creator_type: NegotiableQuoteCommentCreatorType;
    text: String;
    uid: ID;
};
