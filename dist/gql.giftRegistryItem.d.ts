import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { ProductInterface } from "./gql.productInterface";
import { String } from "./gql.string";
export type GiftRegistryItem = {
    created_at: String;
    note?: String;
    product?: ProductInterface;
    quantity: Float;
    quantity_fulfilled: Float;
    uid: ID;
};
