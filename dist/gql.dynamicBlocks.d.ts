import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { DynamicBlock } from "./gql.dynamicBlock";
export type DynamicBlocks = {
    items: DynamicBlock[];
    page_info?: SearchResultPageInfo;
    total_count: Int;
};
