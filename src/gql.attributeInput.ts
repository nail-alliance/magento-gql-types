import {String} from "./gql.string";
export type AttributeInput = {
	attribute_code?: String // The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
	entity_type?: String // The type of entity that defines the attribute.
}