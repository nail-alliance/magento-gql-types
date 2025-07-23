import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { GiftRegistryDynamicAttributeInput } from "./gql.giftRegistryDynamicAttributeInput";
export type UpdateGiftRegistryRegistrantInput = {
    dynamic_attributes?: [GiftRegistryDynamicAttributeInput];
    email?: String;
    firstname?: String;
    gift_registry_registrant_uid: ID;
    lastname?: String;
};
