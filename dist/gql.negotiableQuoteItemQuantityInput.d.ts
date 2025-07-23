import { ID } from "./gql.ID";
import { Float } from "./gql.float";
export type NegotiableQuoteItemQuantityInput = {
    quantity: Float;
    quote_item_uid: ID;
};
