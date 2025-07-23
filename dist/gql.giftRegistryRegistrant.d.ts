import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { GiftRegistryRegistrantDynamicAttribute } from "./gql.giftRegistryRegistrantDynamicAttribute";
export type GiftRegistryRegistrant = {
    dynamic_attributes?: [GiftRegistryRegistrantDynamicAttribute];
    email: String;
    firstname: String;
    lastname: String;
    uid: ID;
};
