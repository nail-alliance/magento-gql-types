import { Int } from "./gql.int";
import { SortFields } from "./gql.sortFields";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { NegotiableQuote } from "./gql.negotiableQuote";
export type NegotiableQuotesOutput = {
    items: [NegotiableQuote];
    page_info: SearchResultPageInfo;
    sort_fields?: SortFields;
    total_count: Int;
};
