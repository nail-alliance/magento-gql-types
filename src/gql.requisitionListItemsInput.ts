import {Float} from "./gql.float";
import {String} from "./gql.string";
import {EnteredOptionInput} from "./gql.enteredOptionInput";
export type RequisitionListItemsInput = {
	entered_options?: [EnteredOptionInput] // Entered option IDs.
	parent_sku?: String // For configurable products, the SKU of the parent product.
	quantity?: Float // The quantity of the product to add.
	selected_options?: [String] // Selected option IDs.
	sku: String // The product SKU.
}