import {String} from "./gql.string";
import {Money} from "./gql.money";
export type CartDiscount = {
	amount: Money // The amount of the discount applied to the item.
	label: [String] // The description of the discount.
}