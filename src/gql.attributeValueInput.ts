import {AttributeInputSelectedOption} from "./gql.attributeInputSelectedOption";
import {String} from "./gql.string";
export type AttributeValueInput = {
	attribute_code: String // The code of the attribute.
	selected_options?: AttributeInputSelectedOption[] // An array containing selected options for a select or multiselect attribute.
	value?: String // The value assigned to the attribute.
}