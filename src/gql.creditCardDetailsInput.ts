import {String} from "./gql.string";
import {Int} from "./gql.int";
export type CreditCardDetailsInput = {
	cc_exp_month: Int // The credit card expiration month.
	cc_exp_year: Int // The credit card expiration year.
	cc_last_4: Int // The last 4 digits of the credit card.
	cc_type: String // The credit card type.
}