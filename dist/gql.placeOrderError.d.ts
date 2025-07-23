import { String } from "./gql.string";
import { PlaceOrderErrorCodes } from "./gql.placeOrderErrorCodes";
export type PlaceOrderError = {
    code: PlaceOrderErrorCodes;
    message: String;
};
