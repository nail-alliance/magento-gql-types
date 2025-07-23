import { Float } from "./gql.float";
import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type UpdateGiftRegistryItemInput = {
    gift_registry_item_uid: ID;
    note?: String;
    quantity: Float;
};
