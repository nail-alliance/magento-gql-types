import { ProductInterface } from "./gql.productInterface";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
export type CategoryProducts = {
    "items"?: ProductInterface[] | null | undefined;
    "page_info"?: SearchResultPageInfo | null | undefined;
    "total_count"?: number | null | undefined;
};
