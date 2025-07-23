import {Float} from "./gql.float";
import {ProductInterface} from "./gql.productInterface";
import {Int} from "./gql.int";
export type GroupedProductItem = {
	position?: Int // The relative position of this item compared to the other group items.
	product?: ProductInterface // Details about this product option.
	qty?: Float // The quantity of this grouped product item.
}