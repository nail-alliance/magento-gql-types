import {String} from "./gql.string";
import {ID} from "./gql.ID";
import {GiftRegistryItemsUserErrorType} from "./gql.giftRegistryItemsUserErrorType";
export type GiftRegistryItemsUserError = {
	code: GiftRegistryItemsUserErrorType // An error code that describes the error encountered.
	gift_registry_item_uid?: ID // The unique ID of the gift registry item containing an error.
	gift_registry_uid?: ID // The unique ID of the GiftRegistry object containing an error.
	message: String // A localized error message.
	product_uid?: ID // The unique ID of the product containing an error.
}