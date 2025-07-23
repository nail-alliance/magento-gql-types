import {Boolean} from "./gql.boolean";
import {RequisitionLists} from "./gql.requisitionLists";
export type DeleteRequisitionListOutput = {
	requisition_lists?: RequisitionLists // The customer's requisition lists after deleting a requisition list.
	status: Boolean // Indicates whether the request to delete the requisition list was successful.
}