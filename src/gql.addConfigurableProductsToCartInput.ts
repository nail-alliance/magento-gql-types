import {ConfigurableProductCartItemInput} from "./gql.configurableProductCartItemInput";
import {String} from "./gql.string";
export type AddConfigurableProductsToCartInput = {
	cart_id: String // The ID of the cart.
	cart_items: ConfigurableProductCartItemInput[] // An array of configurable products to add.
}