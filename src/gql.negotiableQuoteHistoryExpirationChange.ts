import {String} from "./gql.string";
export type NegotiableQuoteHistoryExpirationChange = {
	new_expiration?: String // The expiration date after the change. The value will be 'null' if not set.
	old_expiration?: String // The previous expiration date. The value will be 'null' if not previously set.
}