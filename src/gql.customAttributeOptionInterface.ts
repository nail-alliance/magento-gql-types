import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
export interface CustomAttributeOptionInterface {
	is_default: Boolean // Is the option value default.
	label: String // The label assigned to the attribute option.
	value: String // The attribute option value.
}