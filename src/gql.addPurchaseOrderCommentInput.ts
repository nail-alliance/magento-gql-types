import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type AddPurchaseOrderCommentInput = {
	comment: String // Comment text.
	purchase_order_uid: ID // The unique ID of a purchase order.
}