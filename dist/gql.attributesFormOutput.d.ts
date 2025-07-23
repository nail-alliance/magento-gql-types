import { CustomAttributeMetadataInterface } from "./gql.customAttributeMetadataInterface";
import { AttributeMetadataError } from "./gql.attributeMetadataError";
export type AttributesFormOutput = {
    errors: [AttributeMetadataError];
    items: [CustomAttributeMetadataInterface];
};
