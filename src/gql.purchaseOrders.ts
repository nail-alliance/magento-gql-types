import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {PurchaseOrder} from "./gql.purchaseOrder";
export type PurchaseOrders = {
	items: [PurchaseOrder] // Purchase orders matching the search criteria.
	page_info?: SearchResultPageInfo // Page information of search result's current page.
	total_count?: Int // Total number of purchase orders found matching the search criteria.
}