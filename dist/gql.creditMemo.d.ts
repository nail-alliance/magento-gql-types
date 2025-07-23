import { CreditMemoTotal } from "./gql.creditMemoTotal";
import { String } from "./gql.string";
import { CreditMemoItemInterface } from "./gql.creditMemoItemInterface";
import { ID } from "./gql.ID";
import { SalesCommentItem } from "./gql.salesCommentItem";
export type CreditMemo = {
    comments?: [SalesCommentItem];
    id: ID;
    items?: [CreditMemoItemInterface];
    number: String;
    total?: CreditMemoTotal;
};
