import {String} from "./gql.string";
import {ID} from "./gql.ID";
export interface GiftRegistryDynamicAttributeInterface {
	code: ID // The internal ID of the dynamic attribute.
	label: String // The display name of the dynamic attribute.
	value: String // A corresponding value for the code.
}