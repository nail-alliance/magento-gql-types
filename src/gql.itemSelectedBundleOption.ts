import {ItemSelectedBundleOptionValue} from "./gql.itemSelectedBundleOptionValue";
import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type ItemSelectedBundleOption = {
	/** @deprecated */
	id: ID // The unique ID for a ItemSelectedBundleOption object. Use uid instead. Deprecated
	label: String // The label of the option.
	uid: ID // The unique ID for a ItemSelectedBundleOption object.
	values?: ItemSelectedBundleOptionValue[] // A list of products that represent the values of the parent option.
}