import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {RequisitionList} from "./gql.requisitionList";
export type RequisitionLists = {
	items?: RequisitionList[] // An array of requisition lists.
	page_info?: SearchResultPageInfo // Pagination metadata.
	total_count?: Int // The number of returned requisition lists.
}