import { ID } from "./gql.ID";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type RemoveItemFromCartInput = {
    cart_id: String;
    /** @deprecated */
    cart_item_id?: Int;
    cart_item_uid?: ID;
};
