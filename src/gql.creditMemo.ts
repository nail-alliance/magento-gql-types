import {ID} from "./gql.ID";
import {SalesCommentItem} from "./gql.salesCommentItem";
import {CreditMemoTotal} from "./gql.creditMemoTotal";
import {CreditMemoItemInterface} from "./gql.creditMemoItemInterface";

export type CreditMemo = {
    "comments"?: SalesCommentItem[] | null | undefined
    "id": ID
    "items"?: CreditMemoItemInterface[] | null | undefined
    "number": string
    "total": CreditMemoTotal
}

