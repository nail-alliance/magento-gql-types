import {String} from "./gql.string";
import {CurrencyEnum} from "./gql.currencyEnum";
export type AvailableCurrency = {
	code: CurrencyEnum // 3-letter currency code, for example USD.
	symbol: String // Currency symbol, for example $.
}