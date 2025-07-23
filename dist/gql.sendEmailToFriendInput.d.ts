import { SendEmailToFriendSenderInput } from "./gql.sendEmailToFriendSenderInput";
import { SendEmailToFriendRecipientInput } from "./gql.sendEmailToFriendRecipientInput";
import { Int } from "./gql.int";
export type SendEmailToFriendInput = {
    product_id: Int;
    recipients: SendEmailToFriendRecipientInput[];
    sender: SendEmailToFriendSenderInput;
};
