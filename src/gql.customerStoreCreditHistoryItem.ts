import {Money} from "./gql.money";

export type CustomerStoreCreditHistoryItem = {
    "action"?: string | null | undefined
    "actual_balance"?: Money | null | undefined
    "balance_change"?: Money | null | undefined
    "date_time_changed"?: string | null | undefined
}