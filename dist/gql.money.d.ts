import { Float } from "./gql.float";
import { CurrencyEnum } from "./gql.currencyEnum";
export type Money = {
    currency?: CurrencyEnum;
    value?: Float;
};
