import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Customer } from "./gql.customer";
export type PurchaseOrderComment = {
    author?: Customer;
    created_at: String;
    text: String;
    uid: ID;
};
