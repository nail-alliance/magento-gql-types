import { RequestReturnItemInput } from "./gql.requestReturnItemInput";
import { String } from "./gql.string";
export type RequestGuestReturnInput = {
    comment_text?: String;
    contact_email?: String;
    items: [RequestReturnItemInput];
    token: String;
};
