import { ID } from "./gql.ID";
import { Float } from "./gql.float";
export type WishlistItemMoveInput = {
    quantity?: Float;
    wishlist_item_id: ID;
};
