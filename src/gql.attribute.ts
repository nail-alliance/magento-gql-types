import {StorefrontProperties} from "./gql.storefrontProperties";
import {AttributeOption} from "./gql.attributeOption";
import {String} from "./gql.string";
export type Attribute = {
	attribute_code?: String // The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
	attribute_options?: [AttributeOption] // Attribute options list.
	attribute_type?: String // The data type of the attribute.
	entity_type?: String // The type of entity that defines the attribute.
	input_type?: String // The frontend input type of the attribute.
	storefront_properties?: StorefrontProperties // Details about the storefront properties configured for the attribute.
}