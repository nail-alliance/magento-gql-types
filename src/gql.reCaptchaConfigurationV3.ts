import {Float} from "./gql.float";
import {Boolean} from "./gql.boolean";
import {ReCaptchaFormEnum} from "./gql.reCaptchaFormEnum";
import {String} from "./gql.string";
export type ReCaptchaConfigurationV3 = {
	badge_position: String // The position of the invisible reCAPTCHA badge on each page.
	failure_message: String // The message that appears to the user if validation fails.
	forms: ReCaptchaFormEnum[] // A list of forms on the storefront that have been configured to use reCAPTCHA V3.
	is_enabled: Boolean // Return whether recaptcha is enabled or not
	language_code?: String // A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging.
	minimum_score: Float // The minimum score that identifies a user interaction as a potential risk.
	theme: String // Theme to be used to render reCaptcha.
	website_key: String // The website key generated when the Google reCAPTCHA account was registered.
}