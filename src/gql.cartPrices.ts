import {CartTaxItem} from "./gql.cartTaxItem";
import {CartDiscount} from "./gql.cartDiscount";
import {Discount} from "./gql.discount";
import {GiftOptionsPrices} from "./gql.giftOptionsPrices";
import {Money} from "./gql.money";

export type CartPrices = {
    "applied_taxes"?: CartTaxItem[] | null | undefined
    /** @deprecated */
    "discount"?: CartDiscount | null | undefined
    "discounts"?: Discount[] | null | undefined
    "gift_options"?: GiftOptionsPrices | null | undefined
    "grand_total"?: Money | null | undefined
    "grand_total_excluding_tax"?: Money | null | undefined
    "subtotal_excluding_tax"?: Money | null | undefined
    "subtotal_including_tax"?: Money | null | undefined
    "subtotal_with_discount_excluding_tax"?: Money | null | undefined
}