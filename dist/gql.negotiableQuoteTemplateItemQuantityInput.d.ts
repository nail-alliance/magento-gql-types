import { Float } from "./gql.float";
import { ID } from "./gql.ID";
export type NegotiableQuoteTemplateItemQuantityInput = {
    item_id: ID;
    max_qty?: Float;
    min_qty?: Float;
    quantity: Float;
};
