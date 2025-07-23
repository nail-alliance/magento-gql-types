import {SelectedBundleOptionValue} from "./gql.selectedBundleOptionValue";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type SelectedBundleOption = {
	/** @deprecated */
	id: Int // Use uid instead Deprecated
	label: String // The display name of the selected bundle product option.
	type: String // The type of selected bundle product option.
	uid: ID // The unique ID for a SelectedBundleOption object
	values: SelectedBundleOptionValue[] // An array of selected bundle option values.
}