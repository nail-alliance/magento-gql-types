import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type AddReturnCommentInput = {
	comment_text: String // The text added to the return request.
	return_uid: ID // The unique ID for a Return object.
}