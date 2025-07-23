import { Int } from "./gql.int";
import { SortFields } from "./gql.sortFields";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { NegotiableQuoteTemplateGridItem } from "./gql.negotiableQuoteTemplateGridItem";
export type NegotiableQuoteTemplatesOutput = {
    items: [NegotiableQuoteTemplateGridItem];
    page_info: SearchResultPageInfo;
    sort_fields?: SortFields;
    total_count: Int;
};
