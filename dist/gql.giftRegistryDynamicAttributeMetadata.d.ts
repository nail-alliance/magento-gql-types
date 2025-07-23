import { Int } from "./gql.int";
import { Boolean } from "./gql.boolean";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type GiftRegistryDynamicAttributeMetadata = {
    attribute_group: String;
    code: ID;
    input_type: String;
    is_required: Boolean;
    label: String;
    sort_order?: Int;
};
