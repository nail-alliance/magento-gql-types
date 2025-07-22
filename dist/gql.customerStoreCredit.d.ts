import { CustomerStoreCreditHistory } from "./gql.customerStoreCreditHistory";
import { Money } from "./gql.money";
export type CustomerStoreCredit = {
    "balance_history"?: CustomerStoreCreditHistory | null | undefined;
    "current_balance"?: Money | null | undefined;
    "enabled"?: boolean | null | undefined;
};
