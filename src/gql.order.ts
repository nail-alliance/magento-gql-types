import {String} from "./gql.string";
export type Order = {
	/** @deprecated */
	order_id?: String // Use order_number instead. Deprecated
	order_number: String // The unique ID for an Order object.
}