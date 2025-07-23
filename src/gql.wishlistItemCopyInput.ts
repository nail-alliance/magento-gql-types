import {ID} from "./gql.ID";
import {Float} from "./gql.float";
export type WishlistItemCopyInput = {
	quantity?: Float // The quantity of this item to copy to the destination wish list. This value can't be greater than the quantity in the source wish list.
	wishlist_item_id: ID // The unique ID of the WishlistItemInterface object to be copied.
}