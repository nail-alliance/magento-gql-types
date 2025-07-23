import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {String} from "./gql.string";
import {EnteredOptionInput} from "./gql.enteredOptionInput";
export type CartItemInput = {
	entered_options?: EnteredOptionInput[] // An array of entered options for the base product, such as personalization text.
	parent_sku?: String // For a child product, the SKU of its parent product.
	quantity: Float // The amount or number of an item to add.
	selected_options?: ID[] // The selected options for the base product, such as color or size, using the unique ID for an object such as CustomizableRadioOption, CustomizableDropDownOption, or ConfigurableProductOptionsValues.
	sku: String // The SKU of the product.
}