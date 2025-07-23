import {String} from "./gql.string";
export type FilterTypeInput = {
	eq?: String // Equals.
	finset?: [String] // 
	from?: String // From. Must be used with the to field.
	gt?: String // Greater than.
	gteq?: String // Greater than or equal to.
	in?: [String] // In. The value can contain a set of comma-separated values.
	like?: String // Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters.
	lt?: String // Less than.
	lteq?: String // Less than or equal to.
	moreq?: String // More than or equal to.
	neq?: String // Not equal to.
	nin?: [String] // Not in. The value can contain a set of comma-separated values.
	notnull?: String // Not null.
	null?: String // Is null.
	to?: String // To. Must be used with the from field.
}