import {Int} from "./gql.int";
import {PurchaseOrderApprovalRuleConditionOperator} from "./gql.purchaseOrderApprovalRuleConditionOperator";
import {PurchaseOrderApprovalRuleType} from "./gql.purchaseOrderApprovalRuleType";
import {CreatePurchaseOrderApprovalRuleConditionAmountInput} from "./gql.createPurchaseOrderApprovalRuleConditionAmountInput";
export type CreatePurchaseOrderApprovalRuleConditionInput = {
	amount?: CreatePurchaseOrderApprovalRuleConditionAmountInput // The amount to be compared in a purchase order approval rule. This field is mutually exclusive with condition quantity.
	attribute: PurchaseOrderApprovalRuleType // The type of approval rule.
	operator: PurchaseOrderApprovalRuleConditionOperator // Defines how to evaluate an amount or quantity in a purchase order.
	quantity?: Int // The quantity to be compared in a purchase order approval rule. This field is mutually exclusive with condition amount.
}