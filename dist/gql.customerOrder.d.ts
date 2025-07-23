import { OrderTotal } from "./gql.orderTotal";
import { OrderShipment } from "./gql.orderShipment";
import { Returns } from "./gql.returns";
import { OrderPaymentMethod } from "./gql.orderPaymentMethod";
import { OrderItemInterface } from "./gql.orderItemInterface";
import { Invoice } from "./gql.invoice";
import { ID } from "./gql.ID";
import { Float } from "./gql.float";
import { GiftWrapping } from "./gql.giftWrapping";
import { Boolean } from "./gql.boolean";
import { GiftMessage } from "./gql.giftMessage";
import { OrderCustomerInfo } from "./gql.orderCustomerInfo";
import { CreditMemo } from "./gql.creditMemo";
import { SalesCommentItem } from "./gql.salesCommentItem";
import { String } from "./gql.string";
import { OrderAddress } from "./gql.orderAddress";
import { OrderActionType } from "./gql.orderActionType";
import { ApplyGiftCardToOrder } from "./gql.applyGiftCardToOrder";
import { AppliedCoupon } from "./gql.appliedCoupon";
export type CustomerOrder = {
    applied_coupons: [AppliedCoupon];
    applied_gift_cards?: [ApplyGiftCardToOrder];
    available_actions: [OrderActionType];
    billing_address?: OrderAddress;
    carrier?: String;
    comments?: [SalesCommentItem];
    /** @deprecated */
    created_at?: String;
    credit_memos?: [CreditMemo];
    customer_info: OrderCustomerInfo;
    email?: String;
    gift_message?: GiftMessage;
    gift_receipt_included: Boolean;
    gift_wrapping?: GiftWrapping;
    /** @deprecated */
    grand_total?: Float;
    id: ID;
    /** @deprecated */
    increment_id?: String;
    invoices: [Invoice];
    is_virtual: Boolean;
    items?: [OrderItemInterface];
    items_eligible_for_return?: [OrderItemInterface];
    number: String;
    order_date: String;
    /** @deprecated */
    order_number: String;
    order_status_change_date: String;
    payment_methods?: [OrderPaymentMethod];
    printed_card_included: Boolean;
    returns?: Returns;
    shipments?: [OrderShipment];
    shipping_address?: OrderAddress;
    shipping_method?: String;
    status: String;
    token: String;
    total?: OrderTotal;
};
