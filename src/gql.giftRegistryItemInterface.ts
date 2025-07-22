import {ProductInterface} from "./gql.productInterface";
import {ID} from "./gql.ID";

export type GiftRegistryItemInterface = {
    "created_at": string
    "note"?: string | null | undefined
    "product"?: ProductInterface | null | undefined
    "quantity": number
    "quantity_fulfilled": number
    "uid": ID
}