import {String} from "./gql.string";
export type GiftCardItem = {
	message?: String // The message from the sender to the recipient.
	recipient_email?: String // The email address of the receiver of a virtual gift card.
	recipient_name?: String // The name of the receiver of a physical or virtual gift card.
	sender_email?: String // The email address of the sender of a virtual gift card.
	sender_name?: String // The name of the sender of a physical or virtual gift card.
}