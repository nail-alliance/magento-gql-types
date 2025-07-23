import {String} from "./gql.string";
import {CartItemInput} from "./gql.cartItemInput";
import {CustomizableOptionInput} from "./gql.customizableOptionInput";
export type ConfigurableProductCartItemInput = {
	customizable_options?: [CustomizableOptionInput] // The ID and value of the option.
	data: CartItemInput // The quantity and SKU of the configurable product.
	parent_sku?: String // The SKU of the parent configurable product.
	variant_sku?: String // 
}