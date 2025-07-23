import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {PriceTypeEnum} from "./gql.priceTypeEnum";
import {Float} from "./gql.float";
import {Int} from "./gql.int";
export type CustomizableCheckboxValue = {
	option_type_id?: Int // The ID assigned to the value.
	price?: Float // The price assigned to this option.
	price_type?: PriceTypeEnum // FIXED, PERCENT, or DYNAMIC.
	sku?: String // The Stock Keeping Unit for this option.
	sort_order?: Int // The order in which the checkbox value is displayed.
	title?: String // The display name for this option.
	uid: ID // The unique ID for a CustomizableCheckboxValue object.
}