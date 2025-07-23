import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {Money} from "./gql.money";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type SelectedBundleOptionValue = {
	id: Int // Use uid instead
	label: String // The display name of the value for the selected bundle product option.
	original_price: Money // The original price of the value for the selected bundle product option.
	/** @deprecated */
	price: Float // The price of the value for the selected bundle product option. Use priceV2 instead. Deprecated
	priceV2: Money // The price of the value for the selected bundle product option.
	quantity: Float // The quantity of the value for the selected bundle product option.
	uid: ID // The unique ID for a SelectedBundleOptionValue object
}