import { PaymentMethodInput } from "./gql.paymentMethodInput";
import { String } from "./gql.string";
export type SetPaymentMethodOnCartInput = {
    cart_id: String;
    payment_method: PaymentMethodInput;
};
