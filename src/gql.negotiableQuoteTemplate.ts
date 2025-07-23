import {Float} from "./gql.float";
import {ID} from "./gql.ID";
import {NegotiableQuoteShippingAddress} from "./gql.negotiableQuoteShippingAddress";
import {NegotiableQuoteReferenceDocumentLink} from "./gql.negotiableQuoteReferenceDocumentLink";
import {CartPrices} from "./gql.cartPrices";
import {QuoteTemplateNotificationMessage} from "./gql.quoteTemplateNotificationMessage";
import {Int} from "./gql.int";
import {CartItemInterface} from "./gql.cartItemInterface";
import {Boolean} from "./gql.boolean";
import {NegotiableQuoteHistoryEntry} from "./gql.negotiableQuoteHistoryEntry";
import {String} from "./gql.string";
import {NegotiableQuoteComment} from "./gql.negotiableQuoteComment";
import {NegotiableQuoteUser} from "./gql.negotiableQuoteUser";
export type NegotiableQuoteTemplate = {
	buyer: NegotiableQuoteUser // The first and last name of the buyer.
	comments?: [NegotiableQuoteComment] // A list of comments made by the buyer and seller.
	expiration_date: String // The expiration period of the negotiable quote template.
	history?: [NegotiableQuoteHistoryEntry] // A list of status and price changes for the negotiable quote template.
	is_min_max_qty_used: Boolean // Indicates whether the minimum and maximum quantity settings are used.
	is_virtual: Boolean // Indicates whether the negotiable quote template contains only virtual products.
	items?: [CartItemInterface] // The list of items in the negotiable quote template.
	max_order_commitment: Int // Commitment for maximum orders
	min_order_commitment: Int // Commitment for minimum orders
	name: String // The title assigned to the negotiable quote template.
	notifications?: [QuoteTemplateNotificationMessage] // A list of notifications for the negotiable quote template.
	prices?: CartPrices // A set of subtotals and totals applied to the negotiable quote template.
	reference_document_links?: [NegotiableQuoteReferenceDocumentLink] // A list of reference document links for the negotiable quote template.
	shipping_addresses: [NegotiableQuoteShippingAddress] // A list of shipping addresses applied to the negotiable quote template.
	status: String // The status of the negotiable quote template.
	template_id: ID // The unique ID of a NegotiableQuoteTemplate object.
	total_quantity: Float // The total number of items in the negotiable quote template.
}