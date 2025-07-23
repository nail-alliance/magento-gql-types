import { CartItemUpdateInput } from "./gql.cartItemUpdateInput";
import { String } from "./gql.string";
export type UpdateCartItemsInput = {
    cart_id: String;
    cart_items: CartItemUpdateInput[];
};
