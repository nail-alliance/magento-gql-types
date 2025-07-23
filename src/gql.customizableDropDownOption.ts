import {CustomizableDropDownValue} from "./gql.customizableDropDownValue";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
export type CustomizableDropDownOption = {
	/** @deprecated */
	option_id?: Int // Option ID. Use uid instead Deprecated
	required?: Boolean // Indicates whether the option is required.
	sort_order?: Int // The order in which the option is displayed.
	title?: String // The display name for this option.
	uid: ID // The unique ID for a CustomizableOptionInterface object.
	value?: CustomizableDropDownValue[] // An array that defines the set of options for a drop down menu.
}