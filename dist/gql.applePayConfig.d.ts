import { SDKParams } from "./gql.sDKParams";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { ButtonStyles } from "./gql.buttonStyles";
export type ApplePayConfig = {
    button_styles?: ButtonStyles;
    code?: String;
    is_visible?: Boolean;
    payment_intent?: String;
    payment_source?: String;
    sdk_params?: [SDKParams];
    sort_order?: String;
    title?: String;
};
