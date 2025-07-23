import {Float} from "./gql.float";
import {String} from "./gql.string";
export type ExchangeRate = {
	currency_to?: String // Specifies the store’s default currency to exchange to.
	rate?: Float // The exchange rate for the store’s default currency.
}