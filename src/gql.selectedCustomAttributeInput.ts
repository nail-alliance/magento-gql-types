import {String} from "./gql.string";
export type SelectedCustomAttributeInput = {
	attribute_code: String // A string that identifies the selected attribute.
	value: String // The unique ID for a selected custom attribute value.
}