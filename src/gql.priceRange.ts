import {ProductPrice} from "./gql.productPrice";

export type PriceRange = {
    "maximum_price"?: ProductPrice | null | undefined
    "minimum_price": ProductPrice
}
