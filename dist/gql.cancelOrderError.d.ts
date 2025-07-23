import { String } from "./gql.string";
import { CancelOrderErrorCode } from "./gql.cancelOrderErrorCode";
export type CancelOrderError = {
    code: CancelOrderErrorCode;
    message: String;
};
