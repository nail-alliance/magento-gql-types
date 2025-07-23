import { Money } from "./gql.money";
import { FixedProductTax } from "./gql.fixedProductTax";
import { Discount } from "./gql.discount";
export type OrderItemPrices = {
    discounts?: [Discount];
    fixed_product_taxes: [FixedProductTax];
    original_price?: Money;
    original_price_including_tax?: Money;
    original_row_total: Money;
    original_row_total_including_tax: Money;
    price: Money;
    price_including_tax: Money;
    row_total: Money;
    row_total_including_tax: Money;
    total_item_discount: Money;
};
