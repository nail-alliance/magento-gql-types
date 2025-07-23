import { ID } from "./gql.ID";
import { PurchaseOrderApprovalRuleStatus } from "./gql.purchaseOrderApprovalRuleStatus";
import { String } from "./gql.string";
import { PurchaseOrderApprovalRuleConditionInterface } from "./gql.purchaseOrderApprovalRuleConditionInterface";
import { CompanyRole } from "./gql.companyRole";
export type PurchaseOrderApprovalRule = {
    applies_to_roles: [CompanyRole];
    approver_roles: [CompanyRole];
    condition?: PurchaseOrderApprovalRuleConditionInterface;
    created_at: String;
    created_by: String;
    description?: String;
    name: String;
    status: PurchaseOrderApprovalRuleStatus;
    uid: ID;
    updated_at: String;
};
