import { Boolean } from "./gql.boolean";
import { PaymentLocation } from "./gql.paymentLocation";
import { String } from "./gql.string";
export type CreatePaymentOrderInput = {
    cartId: String;
    location: PaymentLocation;
    methodCode: String;
    paymentSource: String;
    vaultIntent?: Boolean;
};
