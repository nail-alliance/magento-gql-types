import {String} from "./gql.string";
import {CardBin} from "./gql.cardBin";
export type Card = {
	bin_details?: CardBin // Card bin details
	card_expiry_month?: String // Expiration month of the card
	card_expiry_year?: String // Expiration year of the card
	last_digits?: String // Last four digits of the card
	name?: String // Name on the card
}