import {CartItemErrorType} from "./gql.cartItemErrorType";

export type CartItemError = {
    "code": CartItemErrorType
    "message": string
}