import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {ProductInterface} from "./gql.productInterface";
export type CategoryProducts = {
	items?: [ProductInterface] // An array of products that are assigned to the category.
	page_info?: SearchResultPageInfo // Pagination metadata.
	total_count?: Int // The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
}