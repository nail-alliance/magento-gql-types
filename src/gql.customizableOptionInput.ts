import {String} from "./gql.string";
import {ID} from "./gql.ID";
import {Int} from "./gql.int";
export type CustomizableOptionInput = {
	id?: Int // The customizable option ID of the product.
	uid?: ID // The unique ID for a CartItemInterface object.
	value_string: String // The string value of the option.
}