import { Money } from "./gql.money";
export type GiftOptionsPrices = {
    gift_wrapping_for_items?: Money;
    gift_wrapping_for_items_incl_tax?: Money;
    gift_wrapping_for_order?: Money;
    gift_wrapping_for_order_incl_tax?: Money;
    printed_card?: Money;
    printed_card_incl_tax?: Money;
};
