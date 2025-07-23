import {String} from "./gql.string";
import {GiftRegistryDynamicAttributeGroup} from "./gql.giftRegistryDynamicAttributeGroup";
import {ID} from "./gql.ID";
export type GiftRegistryDynamicAttribute = {
	code: ID // The internal ID of the dynamic attribute.
	group: GiftRegistryDynamicAttributeGroup // Indicates which group the dynamic attribute is a member of.
	label: String // The display name of the dynamic attribute.
	value: String // A corresponding value for the code.
}