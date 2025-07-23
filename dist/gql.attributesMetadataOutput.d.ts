import { CustomAttributeMetadataInterface } from "./gql.customAttributeMetadataInterface";
import { AttributeMetadataError } from "./gql.attributeMetadataError";
export type AttributesMetadataOutput = {
    errors: [AttributeMetadataError];
    items: [CustomAttributeMetadataInterface];
};
