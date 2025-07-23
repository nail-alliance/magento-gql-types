import {CheckoutUserInputError} from "./gql.checkoutUserInputError";
import {Cart} from "./gql.cart";
export type ReorderItemsOutput = {
	cart: Cart // Detailed information about the customer's cart.
	userInputErrors: CheckoutUserInputError[] // An array of reordering errors.
}