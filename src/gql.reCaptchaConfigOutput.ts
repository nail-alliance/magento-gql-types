import {Boolean} from "./gql.boolean";
import {ReCaptchaConfiguration} from "./gql.reCaptchaConfiguration";
export type ReCaptchaConfigOutput = {
	configurations?: ReCaptchaConfiguration // Configuration details for reCaptcha type
	is_enabled: Boolean // Indicates whether reCaptcha type is enabled
}