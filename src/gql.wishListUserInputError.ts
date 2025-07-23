import {String} from "./gql.string";
import {WishListUserInputErrorType} from "./gql.wishListUserInputErrorType";
export type WishListUserInputError = {
	code: WishListUserInputErrorType // A wish list-specific error code.
	message: String // A localized error message.
}