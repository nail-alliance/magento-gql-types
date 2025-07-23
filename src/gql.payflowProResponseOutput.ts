import {Cart} from "./gql.cart";
export type PayflowProResponseOutput = {
	cart: Cart // The cart with the updated selected payment method.
}