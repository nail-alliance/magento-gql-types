import {Money} from "./gql.money";

export type ApplyGiftCardToOrder = {
    "applied_balance": Money,
    "code": string
}