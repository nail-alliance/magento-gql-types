import { ClearCartErrorType } from "./gql.clearCartErrorType";
import { String } from "./gql.string";
export type ClearCartError = {
    message: String;
    type: ClearCartErrorType;
};
