import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {NegotiableQuoteStatus} from "./gql.negotiableQuoteStatus";
import {NegotiableQuoteShippingAddress} from "./gql.negotiableQuoteShippingAddress";
import {SelectedPaymentMethod} from "./gql.selectedPaymentMethod";
import {CartPrices} from "./gql.cartPrices";
import {CartItemInterface} from "./gql.cartItemInterface";
import {Boolean} from "./gql.boolean";
import {NegotiableQuoteHistoryEntry} from "./gql.negotiableQuoteHistoryEntry";
import {String} from "./gql.string";
import {NegotiableQuoteComment} from "./gql.negotiableQuoteComment";
import {NegotiableQuoteUser} from "./gql.negotiableQuoteUser";
import {NegotiableQuoteBillingAddress} from "./gql.negotiableQuoteBillingAddress";
import {AvailablePaymentMethod} from "./gql.availablePaymentMethod";
export type NegotiableQuote = {
	available_payment_methods?: [AvailablePaymentMethod] // An array of payment methods that can be applied to the negotiable quote.
	billing_address?: NegotiableQuoteBillingAddress // The billing address applied to the negotiable quote.
	buyer: NegotiableQuoteUser // The first and last name of the buyer.
	comments?: [NegotiableQuoteComment] // A list of comments made by the buyer and seller.
	created_at?: String // Timestamp indicating when the negotiable quote was created.
	email?: String // The email address of the company user.
	history?: [NegotiableQuoteHistoryEntry] // A list of status and price changes for the negotiable quote.
	is_virtual: Boolean // Indicates whether the negotiable quote contains only virtual products.
	items?: [CartItemInterface] // The list of items in the negotiable quote.
	name: String // The title assigned to the negotiable quote.
	prices?: CartPrices // A set of subtotals and totals applied to the negotiable quote.
	selected_payment_method?: SelectedPaymentMethod // The payment method that was applied to the negotiable quote.
	shipping_addresses: [NegotiableQuoteShippingAddress] // A list of shipping addresses applied to the negotiable quote.
	status: NegotiableQuoteStatus // The status of the negotiable quote.
	total_quantity: Float // The total number of items in the negotiable quote.
	uid: ID // The unique ID of a NegotiableQuote object.
	updated_at?: String // Timestamp indicating when the negotiable quote was updated.
}