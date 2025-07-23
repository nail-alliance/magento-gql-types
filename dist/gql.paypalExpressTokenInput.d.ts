import { PaypalExpressUrlsInput } from "./gql.paypalExpressUrlsInput";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
export type PaypalExpressTokenInput = {
    cart_id: String;
    code: String;
    express_button?: Boolean;
    urls: PaypalExpressUrlsInput;
    use_paypal_credit?: Boolean;
};
