import {ID} from "./gql.ID";
import {SwatchDataInterface} from "./gql.swatchDataInterface";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
export type ConfigurableProductOptionValue = {
	is_available: Boolean // Indicates whether the product is available with this selected option.
	is_use_default: Boolean // Indicates whether the value is the default.
	label: String // The display name of the value.
	swatch?: SwatchDataInterface // The URL assigned to the thumbnail of the swatch image.
	uid: ID // The unique ID of the value.
}