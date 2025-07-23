import { ID } from "./gql.ID";
import { NegotiableQuoteItemQuantityInput } from "./gql.negotiableQuoteItemQuantityInput";
export type UpdateNegotiableQuoteQuantitiesInput = {
    items: NegotiableQuoteItemQuantityInput[];
    quote_uid: ID;
};
