import {CustomizableMultipleValue} from "./gql.customizableMultipleValue";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
export type CustomizableMultipleOption = {
	/** @deprecated */
	option_id?: Int // Option ID. Use uid instead Deprecated
	required?: Boolean // Indicates whether the option is required.
	sort_order?: Int // The order in which the option is displayed.
	title?: String // The display name for this option.
	uid: ID // The unique ID for a CustomizableOptionInterface object.
	value?: CustomizableMultipleValue[] // An array that defines the set of options for a multiselect.
}