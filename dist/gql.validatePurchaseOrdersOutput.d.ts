import { PurchaseOrder } from "./gql.purchaseOrder";
import { ValidatePurchaseOrderError } from "./gql.validatePurchaseOrderError";
export type ValidatePurchaseOrdersOutput = {
    errors: [ValidatePurchaseOrderError];
    purchase_orders: [PurchaseOrder];
};
