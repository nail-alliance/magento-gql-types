import {CustomAttributeOptionInterface} from "./gql.customAttributeOptionInterface";
import {Boolean} from "./gql.boolean";
import {AttributeFrontendInputEnum} from "./gql.attributeFrontendInputEnum";
import {AttributeEntityTypeEnum} from "./gql.attributeEntityTypeEnum";
import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type AttributeMetadata = {
	code: ID // The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
	default_value?: String // Default attribute value.
	entity_type: AttributeEntityTypeEnum // The type of entity that defines the attribute.
	frontend_class?: String // The frontend class of the attribute.
	frontend_input?: AttributeFrontendInputEnum // The frontend input type of the attribute.
	is_required: Boolean // Whether the attribute value is required.
	is_unique: Boolean // Whether the attribute value must be unique.
	label?: String // The label assigned to the attribute.
	options: CustomAttributeOptionInterface[] // Attribute options.
}