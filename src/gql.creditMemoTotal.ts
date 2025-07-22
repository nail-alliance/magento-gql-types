import {Money} from "./gql.money";
import {Discount} from "./gql.discount";
import {ShippingHandling} from "./gql.shippingHandling";
import {TaxItem} from "./gql.taxItem";

export type CreditMemoTotal = {
    "adjustment": Money
    "base_grand_total": Money
    "discounts"?: Discount[] | null | undefined
    "grand_total": Money
    "shipping_handling"?: ShippingHandling | null | undefined
    "subtotal": Money
    "taxes"?: TaxItem[] | null | undefined
    "total_shipping": Money
    "total_tax": Money
}