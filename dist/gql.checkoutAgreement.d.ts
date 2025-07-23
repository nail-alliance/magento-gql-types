import { CheckoutAgreementMode } from "./gql.checkoutAgreementMode";
import { Boolean } from "./gql.boolean";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type CheckoutAgreement = {
    agreement_id: Int;
    checkbox_text: String;
    content: String;
    content_height?: String;
    is_html: Boolean;
    mode: CheckoutAgreementMode;
    name: String;
};
