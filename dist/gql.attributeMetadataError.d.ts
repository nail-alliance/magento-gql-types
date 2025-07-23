import { AttributeMetadataErrorType } from "./gql.attributeMetadataErrorType";
import { String } from "./gql.string";
export type AttributeMetadataError = {
    message: String;
    type: AttributeMetadataErrorType;
};
