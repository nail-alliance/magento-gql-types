import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ConfigurableOptionAvailableForSelection = {
	attribute_code: String // An attribute code that uniquely identifies a configurable option.
	option_value_uids: ID[] // An array of selectable option value IDs.
}