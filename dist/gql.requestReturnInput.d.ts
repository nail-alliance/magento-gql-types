import { ID } from "./gql.ID";
import { RequestReturnItemInput } from "./gql.requestReturnItemInput";
import { String } from "./gql.string";
export type RequestReturnInput = {
    comment_text?: String;
    contact_email?: String;
    items: RequestReturnItemInput[];
    order_uid: ID;
};
