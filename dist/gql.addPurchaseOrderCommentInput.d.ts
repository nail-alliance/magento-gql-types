import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type AddPurchaseOrderCommentInput = {
    comment: String;
    purchase_order_uid: ID;
};
