import {ID} from "./gql.ID";
import {ComparableItem} from "./gql.comparableItem";
import {Int} from "./gql.int";
import {ComparableAttribute} from "./gql.comparableAttribute";
export type CompareList = {
	attributes?: ComparableAttribute[] // An array of attributes that can be used for comparing products.
	item_count: Int // The number of items in the compare list.
	items?: ComparableItem[] // An array of products to compare.
	uid: ID // The unique ID assigned to the compare list.
}