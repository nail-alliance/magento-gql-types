import { SendEmailToFriendSender } from "./gql.sendEmailToFriendSender";
import { SendEmailToFriendRecipient } from "./gql.sendEmailToFriendRecipient";
export type SendEmailToFriendOutput = {
    recipients?: [SendEmailToFriendRecipient];
    sender?: SendEmailToFriendSender;
};
