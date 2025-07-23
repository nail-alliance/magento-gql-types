import {Int} from "./gql.int";
import {SortFields} from "./gql.sortFields";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {NegotiableQuoteTemplateGridItem} from "./gql.negotiableQuoteTemplateGridItem";
export type NegotiableQuoteTemplatesOutput = {
	items: NegotiableQuoteTemplateGridItem[] // A list of negotiable quote templates
	page_info: SearchResultPageInfo // Contains pagination metadata
	sort_fields?: SortFields // Contains the default sort field and all available sort fields.
	total_count: Int // The number of negotiable quote templates returned
}