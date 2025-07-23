import {String} from "./gql.string";
import {PurchaseOrderApprovalFlowEvent} from "./gql.purchaseOrderApprovalFlowEvent";
export type PurchaseOrderRuleApprovalFlow = {
	events: PurchaseOrderApprovalFlowEvent[] // The approval flow event related to the rule.
	rule_name: String // The name of the applied rule.
}