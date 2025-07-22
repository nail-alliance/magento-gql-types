import {KeyValue} from "./gql.keyValue";

export type OrderPaymentMethod = {
    "additional_data"?: KeyValue[] | null | undefined
    "name": string
    "type": string
}