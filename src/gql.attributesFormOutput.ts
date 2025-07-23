import {CustomAttributeMetadataInterface} from "./gql.customAttributeMetadataInterface";
import {AttributeMetadataError} from "./gql.attributeMetadataError";
export type AttributesFormOutput = {
	errors: AttributeMetadataError[] // Errors of retrieving certain attributes metadata.
	items: CustomAttributeMetadataInterface[] // Requested attributes metadata.
}