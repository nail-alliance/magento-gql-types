import {ID} from "./gql.ID";
import {ProductInterface} from "./gql.productInterface";
import {ProductAttribute} from "./gql.productAttribute";
export type ComparableItem = {
	attributes: [ProductAttribute] // An array of product attributes that can be used to compare products.
	product: ProductInterface // Details about a product in a compare list.
	uid: ID // The unique ID of an item in a compare list.
}