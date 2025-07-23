import {Int} from "./gql.int";
import {Boolean} from "./gql.boolean";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export interface GiftRegistryDynamicAttributeMetadataInterface {
	attribute_group: String // Indicates which group the dynamic attribute a member of.
	code: ID // The internal ID of the dynamic attribute.
	input_type: String // The selected input type for this dynamic attribute. The value can be one of several static or custom types.
	is_required: Boolean // Indicates whether the dynamic attribute is required.
	label: String // The display name of the dynamic attribute.
	sort_order?: Int // The order in which to display the dynamic attribute.
}