import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {Int} from "./gql.int";
import {Boolean} from "./gql.boolean";
import {String} from "./gql.string";
export type NegotiableQuoteTemplateGridItem = {
	activated_at: String // The date and time the negotiable quote template was activated.
	company_name: String // Company name the quote template is assigned to
	expiration_date: String // The expiration period of the negotiable quote template.
	is_min_max_qty_used: Boolean // Indicates whether the minimum and maximum quantity settings are used.
	last_shared_at: String // The date and time the negotiable quote template was last shared.
	max_order_commitment: Int // Commitment for maximum orders
	min_negotiated_grand_total: Float // The minimum negotiated grand total of the negotiable quote template.
	min_order_commitment: Int // Commitment for minimum orders
	name: String // The title assigned to the negotiable quote template.
	orders_placed: Int // The number of orders placed for the negotiable quote template.
	sales_rep_name: String // The first and last name of the sales representative.
	state: String // State of the negotiable quote template.
	status: String // The status of the negotiable quote template.
	submitted_by: String // The first and last name of the buyer.
	template_id: ID // The unique ID of a NegotiableQuoteTemplate object.
}