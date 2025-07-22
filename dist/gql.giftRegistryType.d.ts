import { ID } from "./gql.ID";
import { GiftRegistryDynamicAttributeMetadataInterface } from "./gql.giftRegistryDynamicAttributeMetadataInterface";
export type GiftRegistryType = {
    "dynamic_attributes_metadata"?: [GiftRegistryDynamicAttributeMetadataInterface | null | undefined];
    "label": string;
    "uid": ID;
};
