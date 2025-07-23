import { NegotiableQuoteHistoryTotalChange } from "./gql.negotiableQuoteHistoryTotalChange";
import { NegotiableQuoteHistoryStatusesChange } from "./gql.negotiableQuoteHistoryStatusesChange";
import { NegotiableQuoteHistoryProductsRemovedChange } from "./gql.negotiableQuoteHistoryProductsRemovedChange";
import { NegotiableQuoteHistoryExpirationChange } from "./gql.negotiableQuoteHistoryExpirationChange";
import { NegotiableQuoteCustomLogChange } from "./gql.negotiableQuoteCustomLogChange";
import { NegotiableQuoteHistoryCommentChange } from "./gql.negotiableQuoteHistoryCommentChange";
export type NegotiableQuoteHistoryChanges = {
    comment_added?: NegotiableQuoteHistoryCommentChange;
    custom_changes?: NegotiableQuoteCustomLogChange;
    expiration?: NegotiableQuoteHistoryExpirationChange;
    products_removed?: NegotiableQuoteHistoryProductsRemovedChange;
    statuses?: NegotiableQuoteHistoryStatusesChange;
    total?: NegotiableQuoteHistoryTotalChange;
};
