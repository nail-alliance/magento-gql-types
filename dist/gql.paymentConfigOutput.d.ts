import { SmartButtonsConfig } from "./gql.smartButtonsConfig";
import { HostedFieldsConfig } from "./gql.hostedFieldsConfig";
import { GooglePayConfig } from "./gql.googlePayConfig";
import { ApplePayConfig } from "./gql.applePayConfig";
export type PaymentConfigOutput = {
    apple_pay?: ApplePayConfig;
    google_pay?: GooglePayConfig;
    hosted_fields?: HostedFieldsConfig;
    smart_buttons?: SmartButtonsConfig;
};
