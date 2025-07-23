import { InvoiceTotal } from "./gql.invoiceTotal";
import { String } from "./gql.string";
import { InvoiceItemInterface } from "./gql.invoiceItemInterface";
import { ID } from "./gql.ID";
import { SalesCommentItem } from "./gql.salesCommentItem";
export type Invoice = {
    comments?: SalesCommentItem[];
    id: ID;
    items?: InvoiceItemInterface[];
    number: String;
    total?: InvoiceTotal;
};
