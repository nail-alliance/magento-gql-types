import { FixedProductTax } from "./gql.fixedProductTax";
import { Money } from "./gql.money";
import { ProductDiscount } from "./gql.productDiscount";
export type ProductPrice = {
    discount?: ProductDiscount;
    final_price: Money;
    fixed_product_taxes?: FixedProductTax[];
    regular_price: Money;
};
