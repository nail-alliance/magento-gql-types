import {Int} from "./gql.int";
import {String} from "./gql.string";
export type CartAddressRegion = {
	code?: String // The state or province code.
	label?: String // The display label for the region.
	region_id?: Int // The unique ID for a pre-defined region.
}