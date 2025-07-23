import {GiftRegistryItemsUserError} from "./gql.giftRegistryItemsUserError";
import {Boolean} from "./gql.boolean";
import {GiftRegistry} from "./gql.giftRegistry";
export type MoveCartItemsToGiftRegistryOutput = {
	gift_registry?: GiftRegistry // The gift registry.
	status: Boolean // Indicates whether the attempt to move the cart items to the gift registry was successful.
	user_errors: [GiftRegistryItemsUserError] // An array of errors encountered while moving items from the cart to the gift registry.
}