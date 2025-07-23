import {Int} from "./gql.int";
import {String} from "./gql.string";
export type NegotiableQuoteAddressRegion = {
	code?: String // The address region code.
	label?: String // The display name of the region.
	region_id?: Int // The unique ID for a pre-defined region.
}