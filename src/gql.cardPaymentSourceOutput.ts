import {String} from "./gql.string";
export type CardPaymentSourceOutput = {
	brand?: String // The brand of the card
	expiry?: String // The expiry of the card
	last_digits?: String // The last digits of the card
}