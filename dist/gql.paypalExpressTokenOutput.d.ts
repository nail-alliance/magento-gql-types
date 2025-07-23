import { String } from "./gql.string";
import { PaypalExpressUrlList } from "./gql.paypalExpressUrlList";
export type PaypalExpressTokenOutput = {
    paypal_urls?: PaypalExpressUrlList;
    token?: String;
};
