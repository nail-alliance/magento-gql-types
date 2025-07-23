import { Money } from "./gql.money";
import { FixedProductTax } from "./gql.fixedProductTax";
import { Discount } from "./gql.discount";
import { ProductDiscount } from "./gql.productDiscount";
export type CartItemPrices = {
    catalog_discount?: ProductDiscount;
    discounts?: [Discount];
    fixed_product_taxes?: [FixedProductTax];
    original_item_price: Money;
    original_row_total: Money;
    price: Money;
    price_including_tax: Money;
    row_catalog_discount?: ProductDiscount;
    row_total: Money;
    row_total_including_tax: Money;
    total_item_discount?: Money;
};
