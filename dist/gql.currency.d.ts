import { ExchangeRate } from "./gql.exchangeRate";
import { String } from "./gql.string";
export type Currency = {
    available_currency_codes?: [String];
    base_currency_code?: String;
    base_currency_symbol?: String;
    /** @deprecated */
    default_display_currecy_code?: String;
    /** @deprecated */
    default_display_currecy_symbol?: String;
    default_display_currency_code?: String;
    default_display_currency_symbol?: String;
    exchange_rates?: [ExchangeRate];
};
