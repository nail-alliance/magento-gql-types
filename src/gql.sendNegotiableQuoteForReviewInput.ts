import {ID} from "./gql.ID";
import {NegotiableQuoteCommentInput} from "./gql.negotiableQuoteCommentInput";
export type SendNegotiableQuoteForReviewInput = {
	comment?: NegotiableQuoteCommentInput // A comment for the seller to review.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
}