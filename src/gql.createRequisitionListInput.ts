import {String} from "./gql.string";
export type CreateRequisitionListInput = {
	description?: String // An optional description of the requisition list.
	name: String // The name assigned to the requisition list.
}