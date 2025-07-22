import {ID} from "./gql.ID";
import {GiftRegistryDynamicAttributeGroup} from "./gql.giftRegistryDynamicAttributeGroup";

export type GiftRegistryDynamicAttribute = {
    "code": ID
    "group": GiftRegistryDynamicAttributeGroup
    "label": string
    "value": string
}

