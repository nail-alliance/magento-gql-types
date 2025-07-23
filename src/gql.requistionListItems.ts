import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {RequisitionListItemInterface} from "./gql.requisitionListItemInterface";
export type RequistionListItems = {
	items: [RequisitionListItemInterface] // An array of items in the requisition list.
	page_info?: SearchResultPageInfo // Pagination metadata.
	total_pages: Int // The number of pages returned.
}