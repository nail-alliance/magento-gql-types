import {SortField} from "./gql.sortField";
import {String} from "./gql.string";
export type SortFields = {
	default?: String // The default sort field value.
	options?: SortField[] // An array of possible sort fields.
}