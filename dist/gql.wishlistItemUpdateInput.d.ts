import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { EnteredOptionInput } from "./gql.enteredOptionInput";
import { String } from "./gql.string";
export type WishlistItemUpdateInput = {
    description?: String;
    entered_options?: EnteredOptionInput[];
    quantity?: Float;
    selected_options?: ID[];
    wishlist_item_id: ID;
};
