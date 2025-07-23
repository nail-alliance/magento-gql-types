import { PaymentMethodInput } from "./gql.paymentMethodInput";
import { String } from "./gql.string";
export type SetPaymentMethodAndPlaceOrderInput = {
    cart_id: String;
    payment_method: PaymentMethodInput;
};
