import {Float} from "./gql.float";
import {CurrencyEnum} from "./gql.currencyEnum";
export type Money = {
	currency?: CurrencyEnum // A three-letter currency code, such as USD or EUR.
	value?: Float // A number expressing a monetary value.
}