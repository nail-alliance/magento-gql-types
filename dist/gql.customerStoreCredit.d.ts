import { Boolean } from "./gql.boolean";
import { Money } from "./gql.money";
import { CustomerStoreCreditHistory } from "./gql.customerStoreCreditHistory";
export type CustomerStoreCredit = {
    balance_history?: CustomerStoreCreditHistory;
    current_balance?: Money;
    enabled?: Boolean;
};
