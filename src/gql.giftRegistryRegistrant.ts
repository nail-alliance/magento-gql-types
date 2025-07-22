import {ID} from "./gql.ID";
import {GiftRegistryRegistrantDynamicAttribute} from "./gql.giftRegistryRegistrantDynamicAttribute";

export type GiftRegistryRegistrant = {
    "dynamic_attributes"?: [GiftRegistryRegistrantDynamicAttribute | null | undefined]
    "email": string
    "firstname": string
    "lastname": string
    "uid": ID
}
