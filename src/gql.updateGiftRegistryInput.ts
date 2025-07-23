import {GiftRegistryStatus} from "./gql.giftRegistryStatus";
import {GiftRegistryShippingAddressInput} from "./gql.giftRegistryShippingAddressInput";
import {GiftRegistryPrivacySettings} from "./gql.giftRegistryPrivacySettings";
import {String} from "./gql.string";
import {GiftRegistryDynamicAttributeInput} from "./gql.giftRegistryDynamicAttributeInput";
export type UpdateGiftRegistryInput = {
	dynamic_attributes?: GiftRegistryDynamicAttributeInput[] // Additional attributes specified as a code-value pair. Unspecified dynamic attributes are not changed.
	event_name?: String // The updated name of the event.
	message?: String // The updated message describing the event.
	privacy_settings?: GiftRegistryPrivacySettings // Indicates whether the gift registry is PRIVATE or PUBLIC.
	shipping_address?: GiftRegistryShippingAddressInput // The updated shipping address for all gift registry items.
	status?: GiftRegistryStatus // Indicates whether the gift registry is ACTIVE or INACTIVE.
}