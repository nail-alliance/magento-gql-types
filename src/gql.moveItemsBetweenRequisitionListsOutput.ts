import {RequisitionList} from "./gql.requisitionList";
export type MoveItemsBetweenRequisitionListsOutput = {
	destination_requisition_list?: RequisitionList // The destination requisition list after moving items.
	source_requisition_list?: RequisitionList // The source requisition list after moving items.
}