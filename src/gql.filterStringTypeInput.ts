import {String} from "./gql.string";
export type FilterStringTypeInput = {
	eq?: String // Filters items that are exactly the same as the specified string.
	in?: [String] // Filters items that are exactly the same as entries specified in an array of strings.
	match?: String // Defines a filter that performs a fuzzy search using the specified string.
}