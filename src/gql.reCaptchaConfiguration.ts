import {ReCaptchaTypeEmum} from "./gql.reCaptchaTypeEmum";
import {Float} from "./gql.float";
import {String} from "./gql.string";
export type ReCaptchaConfiguration = {
	badge_position?: String // The position of the invisible reCAPTCHA badge on each page.
	language_code?: String // A two-character code that specifies the language that is used for Google reCAPTCHA text and messaging.
	minimum_score?: Float // The minimum score that identifies a user interaction as a potential risk.
	re_captcha_type: ReCaptchaTypeEmum // 
	technical_failure_message: String // The message that appears when reCaptcha fails.
	theme: String // Theme to be used to render reCaptcha.
	validation_failure_message: String // The message that appears to the user if validation fails.
	website_key: String // The website key generated when the Google reCAPTCHA account was registered.
}