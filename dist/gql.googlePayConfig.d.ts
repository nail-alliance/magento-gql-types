import { ThreeDSMode } from "./gql.threeDSMode";
import { SDKParams } from "./gql.sDKParams";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { GooglePayButtonStyles } from "./gql.googlePayButtonStyles";
export type GooglePayConfig = {
    button_styles?: GooglePayButtonStyles;
    code?: String;
    is_visible?: Boolean;
    payment_intent?: String;
    payment_source?: String;
    sdk_params?: SDKParams[];
    sort_order?: String;
    three_ds_mode?: ThreeDSMode;
    title?: String;
};
