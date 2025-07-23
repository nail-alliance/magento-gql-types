import { SDKParams } from "./gql.sDKParams";
import { MessageStyles } from "./gql.messageStyles";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { ButtonStyles } from "./gql.buttonStyles";
export type SmartButtonsConfig = {
    button_styles?: ButtonStyles;
    code?: String;
    display_message?: Boolean;
    display_venmo?: Boolean;
    is_visible?: Boolean;
    message_styles?: MessageStyles;
    payment_intent?: String;
    sdk_params?: SDKParams[];
    sort_order?: String;
    title?: String;
};
