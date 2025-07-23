import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CompanyCreditOperation} from "./gql.companyCreditOperation";
export type CompanyCreditHistory = {
	items: [CompanyCreditOperation] // An array of company credit operations.
	page_info: SearchResultPageInfo // Metadata for pagination rendering.
	total_count?: Int // The number of the company credit operations matching the specified filter.
}