import { Boolean } from "./gql.boolean";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type AddPurchaseOrderItemsToCartInput = {
    cart_id: String;
    purchase_order_uid: ID;
    replace_existing_cart_items: Boolean;
};
