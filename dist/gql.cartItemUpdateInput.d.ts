import { Float } from "./gql.float";
import { GiftMessageInput } from "./gql.giftMessageInput";
import { CustomizableOptionInput } from "./gql.customizableOptionInput";
import { ID } from "./gql.ID";
import { Int } from "./gql.int";
export type CartItemUpdateInput = {
    /** @deprecated */
    cart_item_id?: Int;
    cart_item_uid?: ID;
    customizable_options?: [CustomizableOptionInput];
    gift_message?: GiftMessageInput;
    gift_wrapping_id?: ID;
    quantity?: Float;
};
