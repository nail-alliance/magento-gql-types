import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {AttributeMetadataError} from "./gql.attributeMetadataError";
export type ProductCustomAttributes = {
	errors: [AttributeMetadataError] // Errors when retrieving custom attributes metadata.
	items: [AttributeValueInterface] // Requested custom attributes
}