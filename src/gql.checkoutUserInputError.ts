import {String} from "./gql.string";
import {CheckoutUserInputErrorCodes} from "./gql.checkoutUserInputErrorCodes";
export type CheckoutUserInputError = {
	code: CheckoutUserInputErrorCodes // An error code that is specific to Checkout.
	message: String // A localized error message.
	path: [String] // The path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors
}