import {AddRequisitionListItemToCartUserErrorType} from "./gql.addRequisitionListItemToCartUserErrorType";
import {String} from "./gql.string";
export type AddRequisitionListItemToCartUserError = {
	message: String // A description of the error.
	type: AddRequisitionListItemToCartUserErrorType // The type of error that occurred.
}