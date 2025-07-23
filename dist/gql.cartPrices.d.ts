import { Money } from "./gql.money";
import { GiftOptionsPrices } from "./gql.giftOptionsPrices";
import { Discount } from "./gql.discount";
import { CartDiscount } from "./gql.cartDiscount";
import { CartTaxItem } from "./gql.cartTaxItem";
export type CartPrices = {
    applied_taxes?: CartTaxItem[];
    /** @deprecated */
    discount?: CartDiscount;
    discounts?: Discount[];
    gift_options?: GiftOptionsPrices;
    grand_total?: Money;
    grand_total_excluding_tax?: Money;
    subtotal_excluding_tax?: Money;
    subtotal_including_tax?: Money;
    subtotal_with_discount_excluding_tax?: Money;
};
