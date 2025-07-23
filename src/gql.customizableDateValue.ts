import {ID} from "./gql.ID";
import {CustomizableDateTypeEnum} from "./gql.customizableDateTypeEnum";
import {String} from "./gql.string";
import {PriceTypeEnum} from "./gql.priceTypeEnum";
import {Float} from "./gql.float";
export type CustomizableDateValue = {
	price?: Float // The price assigned to this option.
	price_type?: PriceTypeEnum // FIXED, PERCENT, or DYNAMIC.
	sku?: String // The Stock Keeping Unit for this option.
	type?: CustomizableDateTypeEnum // DATE, DATE_TIME or TIME
	uid: ID // The unique ID for a CustomizableDateValue object.
}