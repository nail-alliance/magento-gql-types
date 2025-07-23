import {ID} from "./gql.ID";
import {Boolean} from "./gql.boolean";
import {GiftMessageInput} from "./gql.giftMessageInput";
import {String} from "./gql.string";
export type SetGiftOptionsOnCartInput = {
	cart_id: String // The unique ID that identifies the shopper's cart.
	gift_message?: GiftMessageInput // Gift message details for the cart.
	gift_receipt_included: Boolean // Whether customer requested gift receipt for the cart.
	gift_wrapping_id?: ID // The unique ID for a GiftWrapping object to be used for the cart.
	printed_card_included: Boolean // Whether customer requested printed card for the cart.
}