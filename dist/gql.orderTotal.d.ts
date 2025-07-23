import { TaxItem } from "./gql.taxItem";
import { ShippingHandling } from "./gql.shippingHandling";
import { GiftOptionsPrices } from "./gql.giftOptionsPrices";
import { Discount } from "./gql.discount";
import { Money } from "./gql.money";
export type OrderTotal = {
    base_grand_total: Money;
    discounts?: Discount[];
    gift_options?: GiftOptionsPrices;
    grand_total: Money;
    shipping_handling?: ShippingHandling;
    /** @deprecated */
    subtotal: Money;
    subtotal_excl_tax: Money;
    subtotal_incl_tax: Money;
    taxes?: TaxItem[];
    total_giftcard?: Money;
    total_reward_points?: Money;
    total_shipping: Money;
    total_store_credit?: Money;
    total_tax: Money;
};
