import { ValidatePurchaseOrderErrorType } from "./gql.validatePurchaseOrderErrorType";
import { String } from "./gql.string";
export type ValidatePurchaseOrderError = {
    message: String;
    type: ValidatePurchaseOrderErrorType;
};
