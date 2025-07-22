import {Customer} from "./gql.customer";
import {ID} from "./gql.ID";

export type PurchaseOrderComment = {
    "author"?: Customer | null | undefined
    "created_at": string
    "text": string
    "uid": ID
}