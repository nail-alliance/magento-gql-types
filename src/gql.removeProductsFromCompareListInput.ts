import {ID} from "./gql.ID";
export type RemoveProductsFromCompareListInput = {
	products: [ID] // An array of product IDs to remove from the compare list.
	uid: ID // The unique identifier of the compare list to modify.
}