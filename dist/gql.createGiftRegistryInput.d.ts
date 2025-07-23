import { GiftRegistryStatus } from "./gql.giftRegistryStatus";
import { GiftRegistryShippingAddressInput } from "./gql.giftRegistryShippingAddressInput";
import { AddGiftRegistryRegistrantInput } from "./gql.addGiftRegistryRegistrantInput";
import { GiftRegistryPrivacySettings } from "./gql.giftRegistryPrivacySettings";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { GiftRegistryDynamicAttributeInput } from "./gql.giftRegistryDynamicAttributeInput";
export type CreateGiftRegistryInput = {
    dynamic_attributes?: [GiftRegistryDynamicAttributeInput];
    event_name: String;
    gift_registry_type_uid: ID;
    message: String;
    privacy_settings: GiftRegistryPrivacySettings;
    registrants: [AddGiftRegistryRegistrantInput];
    shipping_address?: GiftRegistryShippingAddressInput;
    status: GiftRegistryStatus;
};
