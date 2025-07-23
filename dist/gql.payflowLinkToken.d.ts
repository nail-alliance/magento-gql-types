import { String } from "./gql.string";
import { PayflowLinkMode } from "./gql.payflowLinkMode";
export type PayflowLinkToken = {
    mode?: PayflowLinkMode;
    paypal_url?: String;
    secure_token?: String;
    secure_token_id?: String;
};
