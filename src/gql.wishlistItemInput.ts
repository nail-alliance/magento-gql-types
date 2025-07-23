import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {String} from "./gql.string";
import {EnteredOptionInput} from "./gql.enteredOptionInput";
export type WishlistItemInput = {
	entered_options?: [EnteredOptionInput] // An array of options that the customer entered.
	parent_sku?: String // For complex product types, the SKU of the parent product.
	quantity: Float // The amount or number of items to add.
	selected_options?: [ID] // An array of strings corresponding to options the customer selected.
	sku: String // The SKU of the product to add. For complex product types, specify the child product SKU.
}