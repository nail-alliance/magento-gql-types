import { Boolean } from "./gql.boolean";
import { Cart } from "./gql.cart";
import { AddRequisitionListItemToCartUserError } from "./gql.addRequisitionListItemToCartUserError";
export type AddRequisitionListItemsToCartOutput = {
    add_requisition_list_items_to_cart_user_errors: AddRequisitionListItemToCartUserError[];
    cart?: Cart;
    status: Boolean;
};
