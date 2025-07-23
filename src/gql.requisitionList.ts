import {ID} from "./gql.ID";
import {Int} from "./gql.int";
import {RequistionListItems} from "./gql.requistionListItems";
import {String} from "./gql.string";
export type RequisitionList = {
	description?: String // Optional text that describes the requisition list.
	items?: RequistionListItems // An array of products added to the requisition list.
	items_count: Int // The number of items in the list.
	name: String // The requisition list name.
	uid: ID // The unique requisition list ID.
	updated_at?: String // The time of the last modification of the requisition list.
}