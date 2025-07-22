import {Money} from "./gql.money";
import {Discount} from "./gql.discount";
import {GiftOptionsPrices} from "./gql.giftOptionsPrices";
import {TaxItem} from "./gql.taxItem";
import {ShippingHandling} from "./gql.shippingHandling";

export type OrderTotal = {
    "base_grand_total": Money
    "discounts"?: Discount[] | null | undefined
    "gift_options"?: GiftOptionsPrices | null | undefined
    "grand_total": Money
    "shipping_handling"?: ShippingHandling | null | undefined
    "subtotal": Money
    "subtotal_excl_tax": Money
    "subtotal_incl_tax": Money
    "taxes"?: TaxItem[] | null | undefined
    "total_giftcard"?: Money | null | undefined
    "total_reward_points"?: Money | null | undefined
    "total_shipping": Money
    "total_store_credit"?: Money | null | undefined
    "total_tax": Money
}