import {CheckoutAgreementMode} from "./gql.checkoutAgreementMode";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
import {Int} from "./gql.int";
export type CheckoutAgreement = {
	agreement_id: Int // The ID for a checkout agreement.
	checkbox_text: String // The checkbox text for the checkout agreement.
	content: String // Required. The text of the agreement.
	content_height?: String // The height of the text box where the Terms and Conditions statement appears during checkout.
	is_html: Boolean // Indicates whether the content text is in HTML format.
	mode: CheckoutAgreementMode // Indicates whether agreements are accepted automatically or manually.
	name: String // The name given to the condition.
}