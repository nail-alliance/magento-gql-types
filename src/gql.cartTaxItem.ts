import {String} from "./gql.string";
import {Money} from "./gql.money";
export type CartTaxItem = {
	amount: Money // The amount of tax applied to the item.
	label: String // The description of the tax.
}