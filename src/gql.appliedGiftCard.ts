import {String} from "./gql.string";
import {Money} from "./gql.money";
export type AppliedGiftCard = {
	applied_balance?: Money // The amount applied to the current cart.
	code?: String // The gift card account code.
	current_balance?: Money // The remaining balance on the gift card.
	expiration_date?: String // The expiration date of the gift card.
}