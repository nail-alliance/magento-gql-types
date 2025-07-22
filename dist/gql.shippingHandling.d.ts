import { Money } from "./gql.money";
import { ShippingDiscount } from "./gql.shippingDiscount";
import { TaxItem } from "./gql.taxItem";
export type ShippingHandling = {
    "amount_excluding_tax"?: Money | null | undefined;
    "amount_including_tax"?: Money | null | undefined;
    "discounts"?: ShippingDiscount[] | null | undefined;
    "taxes"?: TaxItem[] | null | undefined;
    "total_amount": Money;
};
