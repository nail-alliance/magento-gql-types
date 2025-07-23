import {CartItemInput} from "./gql.cartItemInput";
import {CustomizableOptionInput} from "./gql.customizableOptionInput";
export type SimpleProductCartItemInput = {
	customizable_options?: CustomizableOptionInput[] // An array that defines customizable options for the product.
	data: CartItemInput // An object containing the sku, quantity, and other relevant information about the product.
}