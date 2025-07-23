import { GiftRegistryStatus } from "./gql.giftRegistryStatus";
import { GiftRegistryShippingAddressInput } from "./gql.giftRegistryShippingAddressInput";
import { GiftRegistryPrivacySettings } from "./gql.giftRegistryPrivacySettings";
import { String } from "./gql.string";
import { GiftRegistryDynamicAttributeInput } from "./gql.giftRegistryDynamicAttributeInput";
export type UpdateGiftRegistryInput = {
    dynamic_attributes?: [GiftRegistryDynamicAttributeInput];
    event_name?: String;
    message?: String;
    privacy_settings?: GiftRegistryPrivacySettings;
    shipping_address?: GiftRegistryShippingAddressInput;
    status?: GiftRegistryStatus;
};
