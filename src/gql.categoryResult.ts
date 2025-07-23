import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CategoryTree} from "./gql.categoryTree";
export type CategoryResult = {
	items?: [CategoryTree] // A list of categories that match the filter criteria.
	page_info?: SearchResultPageInfo // An object that includes the page_info and currentPage values specified in the query.
	total_count?: Int // The total number of categories that match the criteria.
}