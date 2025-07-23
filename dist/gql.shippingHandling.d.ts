import { TaxItem } from "./gql.taxItem";
import { ShippingDiscount } from "./gql.shippingDiscount";
import { Money } from "./gql.money";
export type ShippingHandling = {
    amount_excluding_tax?: Money;
    amount_including_tax?: Money;
    discounts?: [ShippingDiscount];
    taxes?: [TaxItem];
    total_amount: Money;
};
