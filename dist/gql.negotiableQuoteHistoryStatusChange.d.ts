import { NegotiableQuoteStatus } from "./gql.negotiableQuoteStatus";
export type NegotiableQuoteHistoryStatusChange = {
    new_status: NegotiableQuoteStatus;
    old_status?: NegotiableQuoteStatus;
};
