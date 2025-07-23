import {FilterMatchTypeEnum} from "./gql.filterMatchTypeEnum";
import {String} from "./gql.string";
export type FilterMatchTypeInput = {
	match?: String // Use this attribute to fuzzy match the specified string. For example, to filter on a specific SKU, specify a value such as 24-MB01.
	match_type?: FilterMatchTypeEnum // Filter match type for fine-tuned results. Possible values FULL or PARTIAL. If match_type is not provided, returned results will default to FULL match.
}