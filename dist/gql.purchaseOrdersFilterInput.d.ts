import { PurchaseOrderStatus } from "./gql.purchaseOrderStatus";
import { FilterRangeTypeInput } from "./gql.filterRangeTypeInput";
import { Boolean } from "./gql.boolean";
export type PurchaseOrdersFilterInput = {
    company_purchase_orders?: Boolean;
    created_date?: FilterRangeTypeInput;
    require_my_approval?: Boolean;
    status?: PurchaseOrderStatus;
};
