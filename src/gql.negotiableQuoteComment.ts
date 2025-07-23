import {ID} from "./gql.ID";
import {NegotiableQuoteCommentCreatorType} from "./gql.negotiableQuoteCommentCreatorType";
import {String} from "./gql.string";
import {NegotiableQuoteUser} from "./gql.negotiableQuoteUser";
export type NegotiableQuoteComment = {
	author: NegotiableQuoteUser // The first and last name of the commenter.
	created_at: String // Timestamp indicating when the comment was created.
	creator_type: NegotiableQuoteCommentCreatorType // Indicates whether a buyer or seller commented.
	text: String // The plain text comment.
	uid: ID // The unique ID of a NegotiableQuoteComment object.
}