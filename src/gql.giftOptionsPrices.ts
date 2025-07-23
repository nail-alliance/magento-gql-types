import {Money} from "./gql.money";
export type GiftOptionsPrices = {
	gift_wrapping_for_items?: Money // Price of the gift wrapping for all individual order items.
	gift_wrapping_for_items_incl_tax?: Money // Price of the gift wrapping for all individual order items including tax.
	gift_wrapping_for_order?: Money // Price of the gift wrapping for the whole order.
	gift_wrapping_for_order_incl_tax?: Money // Price of the gift wrapping for the whole order including tax.
	printed_card?: Money // Price for the printed card.
	printed_card_incl_tax?: Money // Price for the printed card including tax.
}