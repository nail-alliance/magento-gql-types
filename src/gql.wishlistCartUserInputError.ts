import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {WishlistCartUserInputErrorType} from "./gql.wishlistCartUserInputErrorType";
export type WishlistCartUserInputError = {
	code: WishlistCartUserInputErrorType // An error code that describes the error encountered.
	message: String // A localized error message.
	wishlistId: ID // The unique ID of the Wishlist object containing an error.
	wishlistItemId: ID // The unique ID of the wish list item containing an error.
}