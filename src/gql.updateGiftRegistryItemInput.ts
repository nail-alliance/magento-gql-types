import {Float} from "./gql.float";
import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type UpdateGiftRegistryItemInput = {
	gift_registry_item_uid: ID // The unique ID of a giftRegistryItem object.
	note?: String // The updated description of the item.
	quantity: Float // The updated quantity of the gift registry item.
}