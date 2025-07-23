import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { GiftRegistryDynamicAttributeMetadataInterface } from "./gql.giftRegistryDynamicAttributeMetadataInterface";
export type GiftRegistryType = {
    dynamic_attributes_metadata?: [GiftRegistryDynamicAttributeMetadataInterface];
    label: String;
    uid: ID;
};
