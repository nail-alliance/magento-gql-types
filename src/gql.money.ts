import {CurrencyEnum} from "./gql.currencyEnum";

export type Money = {
    "currency": CurrencyEnum
    "value": number
}