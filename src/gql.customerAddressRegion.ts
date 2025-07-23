import {Int} from "./gql.int";
import {String} from "./gql.string";
export type CustomerAddressRegion = {
	region?: String // The state or province name.
	region_code?: String // The address region code.
	region_id?: Int // The unique ID for a pre-defined region.
}