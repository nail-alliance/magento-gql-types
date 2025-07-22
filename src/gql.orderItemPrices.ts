import {Discount} from "./gql.discount";
import {FixedProductTax} from "./gql.fixedProductTax";
import {Money} from "./gql.money";

export type OrderItemPrices = {
    "discounts"?: Discount[] | null | undefined
    "fixed_product_taxes": FixedProductTax[]
    "original_price"?: Money | null | undefined
    "original_price_including_tax"?: Money | null | undefined
    "original_row_total": Money
    "original_row_total_including_tax": Money
    "price": Money
    "price_including_tax": Money
    "row_total": Money
    "row_total_including_tax": Money
    "total_item_discount": Money
}