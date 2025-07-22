import {Money} from "./gql.money";

export type AppliedGiftCard = {
    "applied_balance"?: Money | null | undefined
    "code"?: string | null | undefined
    "current_balance"?: Money | null | undefined
    "expiration_date"?: string | null | undefined
}