import { String } from "./gql.string";
export type PaypalExpressUrlsInput = {
    cancel_url: String;
    pending_url?: String;
    return_url: String;
    success_url?: String;
};
