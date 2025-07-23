import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {PriceTypeEnum} from "./gql.priceTypeEnum";
import {Float} from "./gql.float";
import {Int} from "./gql.int";
export type CustomizableAreaValue = {
	max_characters?: Int // The maximum number of characters that can be entered for this customizable option.
	price?: Float // The price assigned to this option.
	price_type?: PriceTypeEnum // FIXED, PERCENT, or DYNAMIC.
	sku?: String // The Stock Keeping Unit for this option.
	uid: ID // The unique ID for a CustomizableAreaValue object.
}