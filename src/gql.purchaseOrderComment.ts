import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Customer} from "./gql.customer";
export type PurchaseOrderComment = {
	author?: Customer // The user who left the comment.
	created_at: String // The date and time when the comment was created.
	text: String // The text of the comment.
	uid: ID // A unique identifier of the comment.
}