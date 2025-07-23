import {CartUserInputError} from "./gql.cartUserInputError";
import {Cart} from "./gql.cart";
export type UpdateCartItemsOutput = {
	cart: Cart // The cart after updating products.
	errors: CartUserInputError[] // Contains errors encountered while updating an item to the cart.
}