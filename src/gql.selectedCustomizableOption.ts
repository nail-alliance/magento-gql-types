import {SelectedCustomizableOptionValue} from "./gql.selectedCustomizableOptionValue";
import {String} from "./gql.string";
import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
import {ID} from "./gql.ID";
export type SelectedCustomizableOption = {
	customizable_option_uid: ID // The unique ID for a specific CustomizableOptionInterface object, such as a CustomizableFieldOption, CustomizableFileOption, or CustomizableAreaOption object.
	/** @deprecated */
	id: Int // Use SelectedCustomizableOption.customizable_option_uid instead. Deprecated
	is_required: Boolean // Indicates whether the customizable option is required.
	label: String // The display name of the selected customizable option.
	sort_order: Int // A value indicating the order to display this option.
	type: String // The type of CustomizableOptionInterface object.
	values: [SelectedCustomizableOptionValue] // An array of selectable values.
}