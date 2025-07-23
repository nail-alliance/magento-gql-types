import { Boolean } from "./gql.boolean";
import { CreditCardDetailsInput } from "./gql.creditCardDetailsInput";
export type PayflowProInput = {
    cc_details: CreditCardDetailsInput;
    is_active_payment_token_enabler?: Boolean;
};
