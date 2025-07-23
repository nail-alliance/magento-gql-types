import { AddRequisitionListItemToCartUserErrorType } from "./gql.addRequisitionListItemToCartUserErrorType";
import { String } from "./gql.string";
export type AddRequisitionListItemToCartUserError = {
    message: String;
    type: AddRequisitionListItemToCartUserErrorType;
};
