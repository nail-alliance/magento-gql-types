import {AttributeMetadataErrorType} from "./gql.attributeMetadataErrorType";
import {String} from "./gql.string";
export type AttributeMetadataError = {
	message: String // Attribute metadata retrieval error message.
	type: AttributeMetadataErrorType // Attribute metadata retrieval error type.
}