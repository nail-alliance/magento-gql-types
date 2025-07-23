import { SDKParams } from "./gql.sDKParams";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
export type PaymentConfigItem = {
    code?: String;
    is_visible?: Boolean;
    payment_intent?: String;
    sdk_params?: [SDKParams];
    sort_order?: String;
    title?: String;
};
