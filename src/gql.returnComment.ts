import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ReturnComment = {
	author_name: String // The name or author who posted the comment.
	created_at: String // The date and time the comment was posted.
	text: String // The contents of the comment.
	uid: ID // The unique ID for a ReturnComment object.
}