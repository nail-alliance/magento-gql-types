import { PurchaseOrder } from "./gql.purchaseOrder";
import { PurchaseOrderActionError } from "./gql.purchaseOrderActionError";
export type PurchaseOrdersActionOutput = {
    errors: PurchaseOrderActionError[];
    purchase_orders: PurchaseOrder[];
};
