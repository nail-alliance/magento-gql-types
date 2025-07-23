import {CustomizableFieldValue} from "./gql.customizableFieldValue";
import {ID} from "./gql.ID";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type CustomizableFieldOption = {
	/** @deprecated */
	option_id?: Int // Option ID. Use uid instead Deprecated
	product_sku?: String // The Stock Keeping Unit of the base product.
	required?: Boolean // Indicates whether the option is required.
	sort_order?: Int // The order in which the option is displayed.
	title?: String // The display name for this option.
	uid: ID // The unique ID for a CustomizableOptionInterface object.
	value?: CustomizableFieldValue // An object that defines a text field.
}