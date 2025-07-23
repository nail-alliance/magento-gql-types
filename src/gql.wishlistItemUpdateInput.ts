import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {EnteredOptionInput} from "./gql.enteredOptionInput";
import {String} from "./gql.string";
export type WishlistItemUpdateInput = {
	description?: String // Customer-entered comments about the item.
	entered_options?: EnteredOptionInput[] // An array of options that the customer entered.
	quantity?: Float // The new amount or number of this item.
	selected_options?: ID[] // An array of strings corresponding to options the customer selected.
	wishlist_item_id: ID // The unique ID for a WishlistItemInterface object.
}