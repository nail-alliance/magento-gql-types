import {GiftRegistryStatus} from "./gql.giftRegistryStatus";
import {GiftRegistryShippingAddressInput} from "./gql.giftRegistryShippingAddressInput";
import {AddGiftRegistryRegistrantInput} from "./gql.addGiftRegistryRegistrantInput";
import {GiftRegistryPrivacySettings} from "./gql.giftRegistryPrivacySettings";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {GiftRegistryDynamicAttributeInput} from "./gql.giftRegistryDynamicAttributeInput";
export type CreateGiftRegistryInput = {
	dynamic_attributes?: [GiftRegistryDynamicAttributeInput] // Additional attributes specified as a code-value pair.
	event_name: String // The name of the event.
	gift_registry_type_uid: ID // The ID of the selected event type.
	message: String // A message describing the event.
	privacy_settings: GiftRegistryPrivacySettings // Indicates whether the registry is PRIVATE or PUBLIC.
	registrants: [AddGiftRegistryRegistrantInput] // The list of people who receive notifications about the registry.
	shipping_address?: GiftRegistryShippingAddressInput // The shipping address for all gift registry items.
	status: GiftRegistryStatus // Indicates whether the registry is ACTIVE or INACTIVE.
}