import {Money} from "./gql.money";

export type AppliedStoreCredit = {
    "applied_balance": Money;
    "current_balance": Money;
    "enabled": boolean
}