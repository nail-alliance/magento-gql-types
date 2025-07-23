import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {DynamicBlock} from "./gql.dynamicBlock";
export type DynamicBlocks = {
	items: DynamicBlock[] // An array containing individual dynamic blocks.
	page_info?: SearchResultPageInfo // Metadata for pagination rendering.
	total_count: Int // The number of returned dynamic blocks.
}