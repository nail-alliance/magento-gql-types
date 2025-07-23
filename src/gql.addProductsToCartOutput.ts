import {Error} from "./gql.error";
import {Cart} from "./gql.cart";
export type AddProductsToCartOutput = {
	cart: Cart // The cart after products have been added.
	user_errors: Error[] // Contains errors encountered while adding an item to the cart.
}