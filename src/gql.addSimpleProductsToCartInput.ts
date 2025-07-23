import {SimpleProductCartItemInput} from "./gql.simpleProductCartItemInput";
import {String} from "./gql.string";
export type AddSimpleProductsToCartInput = {
	cart_id: String // The unique ID of a Cart object.
	cart_items: [SimpleProductCartItemInput] // An array of simple and group items to add.
}