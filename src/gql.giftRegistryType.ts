import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {GiftRegistryDynamicAttributeMetadataInterface} from "./gql.giftRegistryDynamicAttributeMetadataInterface";
export type GiftRegistryType = {
	dynamic_attributes_metadata?: GiftRegistryDynamicAttributeMetadataInterface[] // An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair.
	label: String // The label assigned to the gift registry type on the Admin.
	uid: ID // The unique ID assigned to the gift registry type.
}