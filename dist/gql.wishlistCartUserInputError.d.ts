import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { WishlistCartUserInputErrorType } from "./gql.wishlistCartUserInputErrorType";
export type WishlistCartUserInputError = {
    code: WishlistCartUserInputErrorType;
    message: String;
    wishlistId: ID;
    wishlistItemId: ID;
};
