import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type PurchaseOrderHistoryItem = {
	activity: String // The activity type of the event.
	created_at: String // The date and time when the event happened.
	message: String // The message representation of the event.
	uid: ID // A unique identifier of the purchase order history item.
}