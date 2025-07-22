import { CompanyRole } from "./gql.companyRole";
import { AvailableCurrency } from "./gql.availableCurrency";
export type PurchaseOrderApprovalRuleMetadata = {
    "available_applies_to": CompanyRole[];
    "available_condition_currencies": AvailableCurrency[];
    "available_requires_approval_from": CompanyRole[];
};
