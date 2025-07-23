import {Float} from "./gql.float";
import {ID} from "./gql.ID";
export type NegotiableQuoteTemplateItemQuantityInput = {
	item_id: ID // The unique ID of a CartItemInterface object.
	max_qty?: Float // The new max quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template.
	min_qty?: Float // The new min quantity of the negotiable quote template item. Only used if is_min_max_qty_used is true on the template.
	quantity: Float // The new quantity of the negotiable quote item.
}