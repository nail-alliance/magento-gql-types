import {String} from "./gql.string";
import {Money} from "./gql.money";
export type FixedProductTax = {
	amount?: Money // The amount of the Fixed Product Tax.
	label?: String // The display label assigned to the Fixed Product Tax.
}