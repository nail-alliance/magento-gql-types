import { Boolean } from "./gql.boolean";
import { ReCaptchaConfiguration } from "./gql.reCaptchaConfiguration";
export type ReCaptchaConfigOutput = {
    configurations?: ReCaptchaConfiguration;
    is_enabled: Boolean;
};
