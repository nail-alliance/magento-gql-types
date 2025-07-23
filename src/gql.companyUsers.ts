import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {Customer} from "./gql.customer";
export type CompanyUsers = {
	items: [Customer] // An array of CompanyUser objects that match the specified filter criteria.
	page_info?: SearchResultPageInfo // Pagination metadata.
	total_count: Int // The number of objects returned.
}