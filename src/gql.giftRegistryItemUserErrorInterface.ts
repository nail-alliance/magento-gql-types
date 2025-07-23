import {GiftRegistryItemsUserError} from "./gql.giftRegistryItemsUserError";
import {Boolean} from "./gql.boolean";
export interface GiftRegistryItemUserErrorInterface {
	status: Boolean // Indicates whether the attempt to move the cart items to the gift registry was successful.
	user_errors: GiftRegistryItemsUserError[] // An array of errors encountered while moving items from the cart to the gift registry.
}