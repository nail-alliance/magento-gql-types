import { DeletePurchaseOrderApprovalRuleErrorType } from "./gql.deletePurchaseOrderApprovalRuleErrorType";
import { String } from "./gql.string";
export type DeletePurchaseOrderApprovalRuleError = {
    message?: String;
    type?: DeletePurchaseOrderApprovalRuleErrorType;
};
