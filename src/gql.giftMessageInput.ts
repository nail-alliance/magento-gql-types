import {String} from "./gql.string";
export type GiftMessageInput = {
	from: String // The name of the sender.
	message: String // The text of the gift message.
	to: String // The name of the recepient.
}