import { String } from "./gql.string";
import { WishListUserInputErrorType } from "./gql.wishListUserInputErrorType";
export type WishListUserInputError = {
    code: WishListUserInputErrorType;
    message: String;
};
