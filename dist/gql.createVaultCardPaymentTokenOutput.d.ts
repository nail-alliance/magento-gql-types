import { String } from "./gql.string";
import { PaymentSourceOutput } from "./gql.paymentSourceOutput";
export type CreateVaultCardPaymentTokenOutput = {
    payment_source: PaymentSourceOutput;
    vault_token_id: String;
};
