import { String } from "./gql.string";
import { CurrencyEnum } from "./gql.currencyEnum";
export type AvailableCurrency = {
    code: CurrencyEnum;
    symbol: String;
};
