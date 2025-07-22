import {ProductDiscount} from "./gql.productDiscount";
import {Money} from "./gql.money";
import {FixedProductTax} from "./gql.fixedProductTax";

export type ProductPrice = {
    "discount"?: ProductDiscount | null | undefined
    "final_price": Money
    "fixed_product_taxes"?: FixedProductTax[] | null | undefined
    "regular_price": Money
}