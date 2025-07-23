import {String} from "./gql.string";
export type GiftMessage = {
	from: String // Sender name
	message: String // Gift message text
	to: String // Recipient name
}