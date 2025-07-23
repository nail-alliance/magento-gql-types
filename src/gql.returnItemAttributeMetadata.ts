import {ValidationRule} from "./gql.validationRule";
import {CustomAttributeOptionInterface} from "./gql.customAttributeOptionInterface";
import {Int} from "./gql.int";
import {Boolean} from "./gql.boolean";
import {InputFilterEnum} from "./gql.inputFilterEnum";
import {AttributeFrontendInputEnum} from "./gql.attributeFrontendInputEnum";
import {AttributeEntityTypeEnum} from "./gql.attributeEntityTypeEnum";
import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type ReturnItemAttributeMetadata = {
	code: ID // The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
	default_value?: String // Default attribute value.
	entity_type: AttributeEntityTypeEnum // The type of entity that defines the attribute.
	frontend_class?: String // The frontend class of the attribute.
	frontend_input?: AttributeFrontendInputEnum // The frontend input type of the attribute.
	input_filter?: InputFilterEnum // The template used for the input of the attribute (e.g., 'date').
	is_required: Boolean // Whether the attribute value is required.
	is_unique: Boolean // Whether the attribute value must be unique.
	label?: String // The label assigned to the attribute.
	multiline_count?: Int // The number of lines of the attribute value.
	options: [CustomAttributeOptionInterface] // Attribute options.
	sort_order?: Int // The position of the attribute in the form.
	validate_rules?: [ValidationRule] // The validation rules of the attribute value.
}