import {Int} from "./gql.int";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ConfigurableAttributeOption = {
	code?: String // The ID assigned to the attribute.
	label?: String // A string that describes the configurable attribute option.
	uid: ID // The unique ID for a ConfigurableAttributeOption object.
	value_index?: Int // A unique index number assigned to the configurable product option.
}