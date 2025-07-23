import {CartItemInput} from "./gql.cartItemInput";
import {CustomizableOptionInput} from "./gql.customizableOptionInput";
import {BundleOptionInput} from "./gql.bundleOptionInput";
export type BundleProductCartItemInput = {
	bundle_options: [BundleOptionInput] // A mandatory array of options for the bundle product, including each chosen option and specified quantity.
	customizable_options?: [CustomizableOptionInput] // The ID and value of the option.
	data: CartItemInput // The quantity and SKU of the bundle product.
}