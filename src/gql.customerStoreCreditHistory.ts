import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CustomerStoreCreditHistoryItem} from "./gql.customerStoreCreditHistoryItem";
export type CustomerStoreCreditHistory = {
	items?: [CustomerStoreCreditHistoryItem] // An array containing information about changes to the store credit available to the customer.
	page_info?: SearchResultPageInfo // Metadata for pagination rendering.
	total_count?: Int // The number of items returned.
}