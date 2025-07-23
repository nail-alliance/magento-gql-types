import { PurchaseOrderErrorType } from "./gql.purchaseOrderErrorType";
import { String } from "./gql.string";
export type PurchaseOrderActionError = {
    message: String;
    type: PurchaseOrderErrorType;
};
