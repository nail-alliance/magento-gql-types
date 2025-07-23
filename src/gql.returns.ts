import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {Return} from "./gql.return";
export type Returns = {
	items?: [Return] // A list of return requests.
	page_info?: SearchResultPageInfo // Pagination metadata.
	total_count?: Int // The total number of return requests.
}