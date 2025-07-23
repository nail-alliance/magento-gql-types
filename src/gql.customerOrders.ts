import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CustomerOrder} from "./gql.customerOrder";
import {String} from "./gql.string";
export type CustomerOrders = {
	date_of_first_order?: String // Date of the first order placed in the store
	items: [CustomerOrder] // An array of customer orders.
	page_info?: SearchResultPageInfo // Contains pagination metadata.
	total_count?: Int // The total count of customer orders.
}