import {String} from "./gql.string";
import {Money} from "./gql.money";
export type ApplyGiftCardToOrder = {
	applied_balance: Money // The gift card amount applied to the current order.
	code: String // The gift card account code.
}