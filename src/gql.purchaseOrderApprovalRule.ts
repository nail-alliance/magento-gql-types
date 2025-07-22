import {ID} from "./gql.ID";
import {CompanyRole} from "./gql.companyRole";
import {
    PurchaseOrderApprovalRuleConditionInterface
} from "./gql.purchaseOrderApprovalRuleConditionInterface";
import {PurchaseOrderApprovalRuleStatus} from "./gql.purchaseOrderApprovalRuleStatus";

export type PurchaseOrderApprovalRule = {
    "applies_to_roles": CompanyRole[]
    "approver_roles": CompanyRole[]
    "condition"?: PurchaseOrderApprovalRuleConditionInterface | null | undefined
    "created_at": string
    "created_by": string
    "description"?: string | null | undefined
    "name": string
    "status": PurchaseOrderApprovalRuleStatus
    "uid": ID
    "updated_at": string
}