import {ID} from "./gql.ID";

export interface GiftRegistryDynamicAttributeMetadataInterface {
    "attribute_group": string
    "code": ID
    "input_type": string
    "is_required": boolean
    "label": string
    "sort_order"?: number | null | undefined
}