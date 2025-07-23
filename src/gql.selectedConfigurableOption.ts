import {String} from "./gql.string";
import {Int} from "./gql.int";
import {ID} from "./gql.ID";
export type SelectedConfigurableOption = {
	configurable_product_option_uid: ID // The unique ID for a ConfigurableProductOptions object.
	configurable_product_option_value_uid: ID // The unique ID for a ConfigurableProductOptionsValues object.
	/** @deprecated */
	id: Int // Use SelectedConfigurableOption.configurable_product_option_uid instead. Deprecated
	option_label: String // The display text for the option.
	/** @deprecated */
	value_id: Int // Use SelectedConfigurableOption.configurable_product_option_value_uid instead. Deprecated
	value_label: String // The display name of the selected configurable option.
}