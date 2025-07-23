import {ConfigurableProductOptionValue} from "./gql.configurableProductOptionValue";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type ConfigurableProductOption = {
	attribute_code: String // An attribute code that uniquely identifies a configurable option.
	label: String // The display name of the option.
	uid: ID // The unique ID of the configurable option.
	values?: [ConfigurableProductOptionValue] // An array of values that are applicable for this option.
}