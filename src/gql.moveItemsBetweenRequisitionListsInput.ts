import {ID} from "./gql.ID";
export type MoveItemsBetweenRequisitionListsInput = {
	requisitionListItemUids: [ID] // An array of IDs representing products moved from one requisition list to another.
}