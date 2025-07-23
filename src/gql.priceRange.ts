import {ProductPrice} from "./gql.productPrice";
export type PriceRange = {
	maximum_price?: ProductPrice // The highest possible price for the product.
	minimum_price: ProductPrice // The lowest possible price for the product.
}