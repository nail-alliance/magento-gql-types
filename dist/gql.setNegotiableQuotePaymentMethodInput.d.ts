import { ID } from "./gql.ID";
import { NegotiableQuotePaymentMethodInput } from "./gql.negotiableQuotePaymentMethodInput";
export type SetNegotiableQuotePaymentMethodInput = {
    payment_method: NegotiableQuotePaymentMethodInput;
    quote_uid: ID;
};
