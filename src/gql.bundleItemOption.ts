import {ID} from "./gql.ID";
import {ProductInterface} from "./gql.productInterface";
import {PriceTypeEnum} from "./gql.priceTypeEnum";
import {Float} from "./gql.float";
import {String} from "./gql.string";
import {Int} from "./gql.int";
import {Boolean} from "./gql.boolean";
export type BundleItemOption = {
	can_change_quantity?: Boolean // Indicates whether the customer can change the number of items for this option.
	/** @deprecated */
	id?: Int // Deprecated The ID assigned to the bundled item option. Use uid instead
	is_default?: Boolean // Indicates whether this option is the default option.
	label?: String // The text that identifies the bundled item option.
	position?: Int // When a bundle item contains multiple options, the relative position of this option compared to the other options.
	price?: Float // The price of the selected option.
	price_type?: PriceTypeEnum // One of FIXED, PERCENT, or DYNAMIC.
	product?: ProductInterface // Contains details about this product option.
	/** @deprecated */
	qty?: Float // Deprecated Indicates the quantity of this specific bundle item. Use quantity instead.
	quantity?: Float // The quantity of this specific bundle item.
	uid: ID // The unique ID for a BundleItemOption object.
}