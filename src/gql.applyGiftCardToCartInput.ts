import {String} from "./gql.string";
export type ApplyGiftCardToCartInput = {
	cart_id: String // The unique ID that identifies the customer's cart.
	gift_card_code: String // The gift card code to be applied to the cart.
}