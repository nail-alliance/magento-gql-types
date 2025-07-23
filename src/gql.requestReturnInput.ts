import {ID} from "./gql.ID";
import {RequestReturnItemInput} from "./gql.requestReturnItemInput";
import {String} from "./gql.string";
export type RequestReturnInput = {
	comment_text?: String // Text the buyer entered that describes the reason for the refund request.
	contact_email?: String // The email address the buyer enters to receive notifications about the status of the return.
	items: RequestReturnItemInput[] // An array of items to be returned.
	order_uid: ID // The unique ID for a Order object.
}