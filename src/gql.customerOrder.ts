import {OrderTotal} from "./gql.orderTotal";
import {OrderShipment} from "./gql.orderShipment";
import {Returns} from "./gql.returns";
import {OrderPaymentMethod} from "./gql.orderPaymentMethod";
import {OrderItemInterface} from "./gql.orderItemInterface";
import {Invoice} from "./gql.invoice";
import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {GiftWrapping} from "./gql.giftWrapping";
import {Boolean} from "./gql.boolean";
import {GiftMessage} from "./gql.giftMessage";
import {OrderCustomerInfo} from "./gql.orderCustomerInfo";
import {CreditMemo} from "./gql.creditMemo";
import {SalesCommentItem} from "./gql.salesCommentItem";
import {String} from "./gql.string";
import {OrderAddress} from "./gql.orderAddress";
import {OrderActionType} from "./gql.orderActionType";
import {ApplyGiftCardToOrder} from "./gql.applyGiftCardToOrder";
import {AppliedCoupon} from "./gql.appliedCoupon";
export type CustomerOrder = {
	applied_coupons: AppliedCoupon[] // Coupons applied to the order.
	applied_gift_cards?: ApplyGiftCardToOrder[] // An array of gift cards applied to the order.
	available_actions: OrderActionType[] // List of available order actions.
	billing_address?: OrderAddress // The billing address for the order.
	carrier?: String // The shipping carrier for the order delivery.
	comments?: SalesCommentItem[] // Comments about the order.
	/** @deprecated */
	created_at?: String // Use the order_date field instead. Deprecated
	credit_memos?: CreditMemo[] // A list of credit memos.
	customer_info: OrderCustomerInfo // Returns customer information from order.
	email?: String // Order customer email.
	gift_message?: GiftMessage // The entered gift message for the order
	gift_receipt_included: Boolean // Indicates whether the customer requested a gift receipt for the order.
	gift_wrapping?: GiftWrapping // The selected gift wrapping for the order.
	/** @deprecated */
	grand_total?: Float // Use the totals.grand_total field instead. Deprecated
	id: ID // The unique ID for a CustomerOrder object.
	/** @deprecated */
	increment_id?: String // Use the id field instead. Deprecated
	invoices: Invoice[] // A list of invoices for the order.
	is_virtual: Boolean // TRUE if the order is virtual
	items?: OrderItemInterface[] // An array containing the items purchased in this order.
	items_eligible_for_return?: OrderItemInterface[] // A list of order items eligible to be in a return request.
	number: String // The order number.
	order_date: String // The date the order was placed.
	/** @deprecated */
	order_number: String // Use the number field instead. Deprecated
	order_status_change_date: String // The date the order status was last updated.
	payment_methods?: OrderPaymentMethod[] // Payment details for the order.
	printed_card_included: Boolean // Indicates whether the customer requested a printed card for the order.
	returns?: Returns // Return requests associated with this order.
	shipments?: OrderShipment[] // A list of shipments for the order.
	shipping_address?: OrderAddress // The shipping address for the order.
	shipping_method?: String // The delivery method for the order.
	status: String // The current status of the order.
	token: String // The token that can be used to retrieve the order using order query.
	total?: OrderTotal // Details about the calculated totals for this order.
}