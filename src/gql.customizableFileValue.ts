import {ID} from "./gql.ID";
import {PriceTypeEnum} from "./gql.priceTypeEnum";
import {Float} from "./gql.float";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type CustomizableFileValue = {
	file_extension?: String // The file extension to accept.
	image_size_x?: Int // The maximum width of an image.
	image_size_y?: Int // The maximum height of an image.
	price?: Float // The price assigned to this option.
	price_type?: PriceTypeEnum // FIXED, PERCENT, or DYNAMIC.
	sku?: String // The Stock Keeping Unit for this option.
	uid: ID // The unique ID for a CustomizableFileValue object.
}