import { Money } from "./gql.money";
import { String } from "./gql.string";
export type CustomerStoreCreditHistoryItem = {
    action?: String;
    actual_balance?: Money;
    balance_change?: Money;
    date_time_changed?: String;
};
