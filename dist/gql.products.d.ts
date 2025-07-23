import { Int } from "./gql.int";
import { SearchSuggestion } from "./gql.searchSuggestion";
import { SortFields } from "./gql.sortFields";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { ProductInterface } from "./gql.productInterface";
import { LayerFilter } from "./gql.layerFilter";
import { Aggregation } from "./gql.aggregation";
export type Products = {
    aggregations?: Aggregation[];
    /** @deprecated */
    filters?: LayerFilter[];
    items?: ProductInterface[];
    page_info?: SearchResultPageInfo;
    sort_fields?: SortFields;
    suggestions?: SearchSuggestion[];
    total_count?: Int;
};
