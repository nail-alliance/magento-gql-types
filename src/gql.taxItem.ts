import {String} from "./gql.string";
import {Float} from "./gql.float";
import {Money} from "./gql.money";
export type TaxItem = {
	amount: Money // The amount of tax applied to the item.
	rate: Float // The rate used to calculate the tax.
	title: String // A title that describes the tax.
}