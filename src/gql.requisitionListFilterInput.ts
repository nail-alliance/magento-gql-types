import {FilterEqualTypeInput} from "./gql.filterEqualTypeInput";
import {FilterMatchTypeInput} from "./gql.filterMatchTypeInput";
export type RequisitionListFilterInput = {
	name?: FilterMatchTypeInput // Filter by the display name of the requisition list.
	uids?: FilterEqualTypeInput // Filter requisition lists by one or more requisition list IDs.
}