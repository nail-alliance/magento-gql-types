import { ProductPrice } from "./gql.productPrice";
export type PriceRange = {
    maximum_price?: ProductPrice;
    minimum_price: ProductPrice;
};
