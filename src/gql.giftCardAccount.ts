import {String} from "./gql.string";
import {Money} from "./gql.money";
export type GiftCardAccount = {
	balance?: Money // The balance remaining on the gift card.
	code?: String // The gift card account code.
	expiration_date?: String // The expiration date of the gift card.
}