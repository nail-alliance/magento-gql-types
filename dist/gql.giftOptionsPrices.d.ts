import { Money } from "./gql.money";
export type GiftOptionsPrices = {
    "gift_wrapping_for_items"?: Money | null | undefined;
    "gift_wrapping_for_items_incl_tax"?: Money | null | undefined;
    "gift_wrapping_for_order"?: Money | null | undefined;
    "gift_wrapping_for_order_incl_tax"?: Money | null | undefined;
    "printed_card"?: Money | null | undefined;
    "printed_card_incl_tax"?: Money | null | undefined;
};
