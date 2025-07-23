import { String } from "./gql.string";
import { GiftRegistryDynamicAttributeInput } from "./gql.giftRegistryDynamicAttributeInput";
export type AddGiftRegistryRegistrantInput = {
    dynamic_attributes?: GiftRegistryDynamicAttributeInput[];
    email: String;
    firstname: String;
    lastname: String;
};
