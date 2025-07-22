import {PurchaseOrderRuleApprovalFlow} from "./gql.purchaseOrderRuleApprovalFlow";
import {PurchaseOrderAction} from "./gql.purchaseOrderAction";
import {PurchaseOrderComment} from "./gql.purchaseOrderComment";
import {Customer} from "./gql.customer";
import {PurchaseOrderHistoryItem} from "./gql.purchaseOrderHistoryItem";
import {Cart} from "./gql.cart";
import {PurchaseOrderStatus} from "./gql.purchaseOrderStatus";
import {ID} from "./gql.ID";
import {CustomerOrder} from "./gql.customerOrder";

export type PurchaseOrder = {
    "approval_flow": PurchaseOrderRuleApprovalFlow[]
    "available_actions": PurchaseOrderAction[]
    "comments": PurchaseOrderComment[]
    "created_at": string
    "created_by"?: Customer | null | undefined
    "history_log": PurchaseOrderHistoryItem[]
    "number": string
    "order"?: CustomerOrder | null | undefined
    "quote"?: Cart | null | undefined
    "status": PurchaseOrderStatus
    "uid": ID
    "updated_at": string
}