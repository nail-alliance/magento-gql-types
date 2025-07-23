import {String} from "./gql.string";
import {Float} from "./gql.float";
import {Int} from "./gql.int";
export type BundleOptionInput = {
	id: Int // The ID of the option.
	quantity: Float // The number of the selected item to add to the cart.
	value: [String] // An array with the chosen value of the option.
}