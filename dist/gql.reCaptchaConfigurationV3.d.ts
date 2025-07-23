import { Float } from "./gql.float";
import { Boolean } from "./gql.boolean";
import { ReCaptchaFormEnum } from "./gql.reCaptchaFormEnum";
import { String } from "./gql.string";
export type ReCaptchaConfigurationV3 = {
    badge_position: String;
    failure_message: String;
    forms: ReCaptchaFormEnum[];
    is_enabled: Boolean;
    language_code?: String;
    minimum_score: Float;
    theme: String;
    website_key: String;
};
