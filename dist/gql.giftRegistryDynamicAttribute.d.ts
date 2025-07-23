import { String } from "./gql.string";
import { GiftRegistryDynamicAttributeGroup } from "./gql.giftRegistryDynamicAttributeGroup";
import { ID } from "./gql.ID";
export type GiftRegistryDynamicAttribute = {
    code: ID;
    group: GiftRegistryDynamicAttributeGroup;
    label: String;
    value: String;
};
