import { ReCaptchaTypeEmum } from "./gql.reCaptchaTypeEmum";
import { Float } from "./gql.float";
import { String } from "./gql.string";
export type ReCaptchaConfiguration = {
    badge_position?: String;
    language_code?: String;
    minimum_score?: Float;
    re_captcha_type: ReCaptchaTypeEmum;
    technical_failure_message: String;
    theme: String;
    validation_failure_message: String;
    website_key: String;
};
