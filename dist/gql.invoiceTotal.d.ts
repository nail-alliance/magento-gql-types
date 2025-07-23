import { TaxItem } from "./gql.taxItem";
import { ShippingHandling } from "./gql.shippingHandling";
import { Discount } from "./gql.discount";
import { Money } from "./gql.money";
export type InvoiceTotal = {
    base_grand_total: Money;
    discounts?: [Discount];
    grand_total: Money;
    shipping_handling?: ShippingHandling;
    subtotal: Money;
    taxes?: [TaxItem];
    total_shipping: Money;
    total_tax: Money;
};
