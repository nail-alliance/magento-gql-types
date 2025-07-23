import {CartItemSelectedOptionValuePrice} from "./gql.cartItemSelectedOptionValuePrice";
import {String} from "./gql.string";
import {Int} from "./gql.int";
import {ID} from "./gql.ID";
export type SelectedCustomizableOptionValue = {
	customizable_option_value_uid: ID // The unique ID for a value object that corresponds to the object represented by the customizable_option_uid attribute.
	/** @deprecated */
	id: Int // Use SelectedCustomizableOptionValue.customizable_option_value_uid instead. Deprecated
	label: String // The display name of the selected value.
	price: CartItemSelectedOptionValuePrice // The price of the selected customizable value.
	value: String // The text identifying the selected value.
}