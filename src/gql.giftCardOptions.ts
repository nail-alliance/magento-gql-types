import {String} from "./gql.string";
import {Money} from "./gql.money";
export type GiftCardOptions = {
	amount?: Money // The amount and currency of the gift card.
	custom_giftcard_amount?: Money // The custom amount and currency of the gift card.
	message?: String // A message to the recipient.
	recipient_email?: String // The email address of the person receiving the gift card.
	recipient_name?: String // The name of the person receiving the gift card.
	sender_email?: String // The email address of the person sending the gift card.
	sender_name?: String // The name of the person sending the gift card.
}