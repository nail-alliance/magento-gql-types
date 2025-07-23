import {Int} from "./gql.int";
import {SortFields} from "./gql.sortFields";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {NegotiableQuote} from "./gql.negotiableQuote";
export type NegotiableQuotesOutput = {
	items: [NegotiableQuote] // A list of negotiable quotes
	page_info: SearchResultPageInfo // Contains pagination metadata
	sort_fields?: SortFields // Contains the default sort field and all available sort fields.
	total_count: Int // The number of negotiable quotes returned
}