import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {NegotiableQuoteCommentInput} from "./gql.negotiableQuoteCommentInput";
import {ID} from "./gql.ID";
export type RequestNegotiableQuoteInput = {
	cart_id: ID // The cart ID of the buyer requesting a new negotiable quote.
	comment: NegotiableQuoteCommentInput // Comments the buyer entered to describe the request.
	is_draft?: Boolean // Flag indicating if quote is draft or not.
	quote_name: String // The name the buyer assigned to the negotiable quote request.
}