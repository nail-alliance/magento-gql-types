import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { PurchaseOrderApprovalRule } from "./gql.purchaseOrderApprovalRule";
export type PurchaseOrderApprovalRules = {
    "items": PurchaseOrderApprovalRule[];
    "page_info": SearchResultPageInfo;
    "total_count": number;
};
