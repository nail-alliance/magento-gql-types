import {ID} from "./gql.ID";
export type CopyItemsBetweenRequisitionListsInput = {
	requisitionListItemUids: [ID] // An array of IDs representing products copied from one requisition list to another.
}