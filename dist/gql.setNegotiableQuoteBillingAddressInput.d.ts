import { ID } from "./gql.ID";
import { NegotiableQuoteBillingAddressInput } from "./gql.negotiableQuoteBillingAddressInput";
export type SetNegotiableQuoteBillingAddressInput = {
    billing_address: NegotiableQuoteBillingAddressInput;
    quote_uid: ID;
};
