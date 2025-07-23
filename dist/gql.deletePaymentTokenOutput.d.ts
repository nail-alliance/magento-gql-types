import { Boolean } from "./gql.boolean";
import { CustomerPaymentTokens } from "./gql.customerPaymentTokens";
export type DeletePaymentTokenOutput = {
    customerPaymentTokens?: CustomerPaymentTokens;
    result: Boolean;
};
