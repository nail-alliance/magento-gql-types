import {Boolean} from "./gql.boolean";
import {Cart} from "./gql.cart";
import {AddRequisitionListItemToCartUserError} from "./gql.addRequisitionListItemToCartUserError";
export type AddRequisitionListItemsToCartOutput = {
	add_requisition_list_items_to_cart_user_errors: [AddRequisitionListItemToCartUserError] // Details about why the attempt to add items to the requistion list was not successful.
	cart?: Cart // The cart after adding requisition list items.
	status: Boolean // Indicates whether the attempt to add items to the requisition list was successful.
}