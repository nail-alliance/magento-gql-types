import {SendEmailToFriendSenderInput} from "./gql.sendEmailToFriendSenderInput";
import {SendEmailToFriendRecipientInput} from "./gql.sendEmailToFriendRecipientInput";
import {Int} from "./gql.int";
export type SendEmailToFriendInput = {
	product_id: Int // The ID of the product that the sender is referencing.
	recipients: SendEmailToFriendRecipientInput[] // An array containing information about each recipient.
	sender: SendEmailToFriendSenderInput // Information about the customer and the content of the message.
}