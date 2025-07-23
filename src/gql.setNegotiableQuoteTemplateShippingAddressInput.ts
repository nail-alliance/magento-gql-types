import {ID} from "./gql.ID";
import {NegotiableQuoteTemplateShippingAddressInput} from "./gql.negotiableQuoteTemplateShippingAddressInput";
export type SetNegotiableQuoteTemplateShippingAddressInput = {
	shipping_address: NegotiableQuoteTemplateShippingAddressInput // A shipping adadress to apply to the negotiable quote template.
	template_id: ID // The unique ID of a NegotiableQuote object.
}