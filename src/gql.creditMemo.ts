import {CreditMemoTotal} from "./gql.creditMemoTotal";
import {String} from "./gql.string";
import {CreditMemoItemInterface} from "./gql.creditMemoItemInterface";
import {ID} from "./gql.ID";
import {SalesCommentItem} from "./gql.salesCommentItem";
export type CreditMemo = {
	comments?: SalesCommentItem[] // Comments on the credit memo.
	id: ID // The unique ID for a CreditMemo object.
	items?: CreditMemoItemInterface[] // An array containing details about refunded items.
	number: String // The sequential credit memo number.
	total?: CreditMemoTotal // Details about the total refunded amount.
}