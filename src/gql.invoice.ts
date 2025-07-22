import {ID} from "./gql.ID";
import {InvoiceItemInterface} from "./gql.invoiceItemInterface";
import {InvoiceTotal} from "./gql.invoiceTotal";
import {SalesCommentItem} from "./gql.salesCommentItem";

export type Invoice = {
    "comments": SalesCommentItem[]
    "id": ID
    "items": InvoiceItemInterface[]
    "number": string
    "total": InvoiceTotal
}