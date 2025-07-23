import { Boolean } from "./gql.boolean";
import { ID } from "./gql.ID";
import { NegotiableQuoteAddressInput } from "./gql.negotiableQuoteAddressInput";
export type NegotiableQuoteBillingAddressInput = {
    address?: NegotiableQuoteAddressInput;
    customer_address_uid?: ID;
    same_as_shipping?: Boolean;
    use_for_shipping?: Boolean;
};
