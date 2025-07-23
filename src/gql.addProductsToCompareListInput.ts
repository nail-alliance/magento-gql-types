import {ID} from "./gql.ID";
export type AddProductsToCompareListInput = {
	products: ID[] // An array of product IDs to add to the compare list.
	uid: ID // The unique identifier of the compare list to modify.
}