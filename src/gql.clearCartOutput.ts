import {ClearCartError} from "./gql.clearCartError";
import {Cart} from "./gql.cart";
export type ClearCartOutput = {
	cart?: Cart // The cart after clear cart items.
	errors?: ClearCartError[] // An array of errors encountered while clearing the cart item
}