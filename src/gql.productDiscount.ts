import {Float} from "./gql.float";
export type ProductDiscount = {
	amount_off?: Float // The actual value of the discount.
	percent_off?: Float // The discount expressed a percentage.
}