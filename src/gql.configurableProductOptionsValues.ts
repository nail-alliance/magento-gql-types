import {Int} from "./gql.int";
import {Boolean} from "./gql.boolean";
import {ID} from "./gql.ID";
import {SwatchDataInterface} from "./gql.swatchDataInterface";
import {String} from "./gql.string";
export type ConfigurableProductOptionsValues = {
	default_label?: String // The label of the product on the default store.
	label?: String // The label of the product.
	store_label?: String // The label of the product on the current store.
	swatch_data?: SwatchDataInterface // Swatch data for a configurable product option.
	uid?: ID // The unique ID for a ConfigurableProductOptionsValues object.
	use_default_value?: Boolean // Indicates whether to use the default_label.
	/** @deprecated */
	value_index?: Int // A unique index number assigned to the configurable product option. Use uid instead. Deprecated
}