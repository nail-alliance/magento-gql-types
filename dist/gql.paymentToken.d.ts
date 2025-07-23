import { PaymentTokenTypeEnum } from "./gql.paymentTokenTypeEnum";
import { String } from "./gql.string";
export type PaymentToken = {
    details?: String;
    payment_method_code: String;
    public_hash: String;
    type: PaymentTokenTypeEnum;
};
