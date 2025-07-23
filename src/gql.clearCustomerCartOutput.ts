import {Boolean} from "./gql.boolean";
import {Cart} from "./gql.cart";
export type ClearCustomerCartOutput = {
	cart?: Cart // The cart after clearing items.
	status: Boolean // Indicates whether cart was cleared.
}