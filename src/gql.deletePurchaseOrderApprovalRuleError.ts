import {DeletePurchaseOrderApprovalRuleErrorType} from "./gql.deletePurchaseOrderApprovalRuleErrorType";
import {String} from "./gql.string";
export type DeletePurchaseOrderApprovalRuleError = {
	message?: String // The text of the error message.
	type?: DeletePurchaseOrderApprovalRuleErrorType // The error type.
}