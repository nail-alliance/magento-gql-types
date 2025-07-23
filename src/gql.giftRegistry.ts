import {ID} from "./gql.ID";
import {GiftRegistryType} from "./gql.giftRegistryType";
import {GiftRegistryStatus} from "./gql.giftRegistryStatus";
import {CustomerAddress} from "./gql.customerAddress";
import {GiftRegistryRegistrant} from "./gql.giftRegistryRegistrant";
import {GiftRegistryPrivacySettings} from "./gql.giftRegistryPrivacySettings";
import {GiftRegistryItemInterface} from "./gql.giftRegistryItemInterface";
import {GiftRegistryDynamicAttribute} from "./gql.giftRegistryDynamicAttribute";
import {String} from "./gql.string";
export type GiftRegistry = {
	created_at: String // The date on which the gift registry was created. Only the registry owner can access this attribute.
	dynamic_attributes?: GiftRegistryDynamicAttribute[] // An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair.
	event_name: String // The name of the event.
	items?: GiftRegistryItemInterface[] // An array of products added to the gift registry.
	message: String // The message text the customer entered to describe the event.
	owner_name: String // The customer who created the gift registry.
	privacy_settings: GiftRegistryPrivacySettings // An enum that states whether the gift registry is PRIVATE or PUBLIC. Only the registry owner can access this attribute.
	registrants?: GiftRegistryRegistrant[] // Contains details about each registrant for the event.
	shipping_address?: CustomerAddress // Contains the customer's shipping address. Only the registry owner can access this attribute.
	status: GiftRegistryStatus // An enum that states whether the gift registry is ACTIVE or INACTIVE. Only the registry owner can access this attribute.
	type?: GiftRegistryType // The type of gift registry.
	uid: ID // The unique ID assigned to the gift registry.
}