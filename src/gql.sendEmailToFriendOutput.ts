import {SendEmailToFriendSender} from "./gql.sendEmailToFriendSender";
import {SendEmailToFriendRecipient} from "./gql.sendEmailToFriendRecipient";
export type SendEmailToFriendOutput = {
	recipients?: [SendEmailToFriendRecipient] // An array containing information about each recipient.
	sender?: SendEmailToFriendSender // Information about the customer and the content of the message.
}