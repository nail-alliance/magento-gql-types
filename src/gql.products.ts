import {Int} from "./gql.int";
import {SearchSuggestion} from "./gql.searchSuggestion";
import {SortFields} from "./gql.sortFields";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {ProductInterface} from "./gql.productInterface";
import {LayerFilter} from "./gql.layerFilter";
import {Aggregation} from "./gql.aggregation";
export type Products = {
	aggregations?: Aggregation[] // A bucket that contains the attribute code and label for each filterable option.
	/** @deprecated */
	filters?: LayerFilter[] // Layered navigation filters array. Use aggregations instead. Deprecated
	items?: ProductInterface[] // An array of products that match the specified search criteria.
	page_info?: SearchResultPageInfo // An object that includes the page_info and currentPage values specified in the query.
	sort_fields?: SortFields // An object that includes the default sort field and all available sort fields.
	suggestions?: SearchSuggestion[] // An array of search suggestions for case when search query have no results.
	total_count?: Int // The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not.
}