import { Discount } from "./gql.discount";
import { Money } from "./gql.money";
import { ProductDiscount } from "./gql.productDiscount";
import { FixedProductTax } from "./gql.fixedProductTax";
export type CartItemPrices = {
    "catalog_discount"?: ProductDiscount | null | undefined;
    "discounts"?: Discount[] | null | undefined;
    "fixed_product_taxes"?: FixedProductTax[] | null | undefined;
    "original_item_price": Money;
    "original_row_total": Money;
    "price": Money;
    "price_including_tax": Money;
    "row_catalog_discount"?: ProductDiscount | null | undefined;
    "row_total": Money;
    "row_total_including_tax": Money;
    "total_item_discount"?: Money | null | undefined;
};
