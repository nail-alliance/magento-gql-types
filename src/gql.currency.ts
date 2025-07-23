import {ExchangeRate} from "./gql.exchangeRate";
import {String} from "./gql.string";
export type Currency = {
	available_currency_codes?: String[] // An array of three-letter currency codes accepted by the store, such as USD and EUR.
	base_currency_code?: String // The base currency set for the store, such as USD.
	base_currency_symbol?: String // The symbol for the specified base currency, such as $.
	/** @deprecated */
	default_display_currecy_code?: String // Symbol was missed. Use default_display_currency_code. Deprecated
	/** @deprecated */
	default_display_currecy_symbol?: String // Symbol was missed. Use default_display_currency_code. Deprecated
	default_display_currency_code?: String // The currency that is displayed by default, such as USD.
	default_display_currency_symbol?: String // The currency symbol that is displayed by default, such as $.
	exchange_rates?: ExchangeRate[] // An array of exchange rates for currencies defined in the store.
}