import { InternalError } from "./gql.internalError";
import { NoSuchEntityUidError } from "./gql.noSuchEntityUidError";
import { NegotiableQuoteInvalidStateError } from "./gql.negotiableQuoteInvalidStateError";
export type CloseNegotiableQuoteError = NegotiableQuoteInvalidStateError | NoSuchEntityUidError | InternalError;
