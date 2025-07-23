import {String} from "./gql.string";
export type FilterRangeTypeInput = {
	from?: String // Use this attribute to specify the lowest possible value in the range.
	to?: String // Use this attribute to specify the highest possible value in the range.
}