import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {PurchaseOrderApprovalRule} from "./gql.purchaseOrderApprovalRule";
export type PurchaseOrderApprovalRules = {
	items: [PurchaseOrderApprovalRule] // A list of purchase order approval rules visible to the customer.
	page_info?: SearchResultPageInfo // Result pagination details.
	total_count?: Int // The total number of purchase order approval rules visible to the customer.
}