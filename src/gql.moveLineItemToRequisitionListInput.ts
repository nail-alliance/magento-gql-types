import {ID} from "./gql.ID";
export type MoveLineItemToRequisitionListInput = {
	quote_item_uid: ID // The unique ID of a CartLineItem object.
	quote_uid: ID // The unique ID of a NegotiableQuote object.
	requisition_list_uid: ID // The unique ID of a requisition list.
}