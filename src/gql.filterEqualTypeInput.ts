import {String} from "./gql.string";
export type FilterEqualTypeInput = {
	eq?: String // Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value such as 5.
	in?: String[] // Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of ["4", "5", "6"].
}