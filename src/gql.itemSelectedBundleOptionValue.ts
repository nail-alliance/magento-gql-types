import {Float} from "./gql.float";
import {String} from "./gql.string";
import {Money} from "./gql.money";
import {ID} from "./gql.ID";
export type ItemSelectedBundleOptionValue = {
	/** @deprecated */
	id: ID // The unique ID for a ItemSelectedBundleOptionValue object. Use uid instead. Deprecated
	price: Money // The price of the child bundle product.
	product_name: String // The name of the child bundle product.
	product_sku: String // The SKU of the child bundle product.
	quantity: Float // The number of this bundle product that were ordered.
	uid: ID // The unique ID for a ItemSelectedBundleOptionValue object.
}