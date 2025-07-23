import {Float} from "./gql.float";
import {String} from "./gql.string";
import {PriceTypeEnum} from "./gql.priceTypeEnum";
export type CartItemSelectedOptionValuePrice = {
	type: PriceTypeEnum // Indicates whether the price type is fixed, percent, or dynamic.
	units: String // A string that describes the unit of the value.
	value: Float // A price value.
}