import {CartItemInterface} from "./gql.cartItemInterface";
import {GiftWrapping} from "./gql.giftWrapping";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
import {GiftMessage} from "./gql.giftMessage";

export type SimpleCartItem = CartItemInterface & {
    "available_gift_wrapping": GiftWrapping[]
    "customizable_options": SelectedCustomizableOption[]
    "gift_message"?: GiftMessage | null | undefined
    "gift_wrapping"?: GiftWrapping | null | undefined
}

