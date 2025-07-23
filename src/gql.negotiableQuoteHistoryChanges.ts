import {NegotiableQuoteHistoryTotalChange} from "./gql.negotiableQuoteHistoryTotalChange";
import {NegotiableQuoteHistoryStatusesChange} from "./gql.negotiableQuoteHistoryStatusesChange";
import {NegotiableQuoteHistoryProductsRemovedChange} from "./gql.negotiableQuoteHistoryProductsRemovedChange";
import {NegotiableQuoteHistoryExpirationChange} from "./gql.negotiableQuoteHistoryExpirationChange";
import {NegotiableQuoteCustomLogChange} from "./gql.negotiableQuoteCustomLogChange";
import {NegotiableQuoteHistoryCommentChange} from "./gql.negotiableQuoteHistoryCommentChange";
export type NegotiableQuoteHistoryChanges = {
	comment_added?: NegotiableQuoteHistoryCommentChange // The comment provided with a change in the negotiable quote history.
	custom_changes?: NegotiableQuoteCustomLogChange // Lists log entries added by third-party extensions.
	expiration?: NegotiableQuoteHistoryExpirationChange // The expiration date of the negotiable quote before and after a change in the quote history.
	products_removed?: NegotiableQuoteHistoryProductsRemovedChange // Lists products that were removed as a result of a change in the quote history.
	statuses?: NegotiableQuoteHistoryStatusesChange // The status before and after a change in the negotiable quote history.
	total?: NegotiableQuoteHistoryTotalChange // The total amount of the negotiable quote before and after a change in the quote history.
}