import { ID } from "./gql.ID";
import { Boolean } from "./gql.boolean";
import { GiftMessageInput } from "./gql.giftMessageInput";
import { String } from "./gql.string";
export type SetGiftOptionsOnCartInput = {
    cart_id: String;
    gift_message?: GiftMessageInput;
    gift_receipt_included: Boolean;
    gift_wrapping_id?: ID;
    printed_card_included: Boolean;
};
