import {String} from "./gql.string";
export type SendEmailToFriendSenderInput = {
	email: String // The email address of the sender.
	message: String // The text of the message to be sent.
	name: String // The name of the sender.
}