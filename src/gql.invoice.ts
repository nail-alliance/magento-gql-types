import {InvoiceTotal} from "./gql.invoiceTotal";
import {String} from "./gql.string";
import {InvoiceItemInterface} from "./gql.invoiceItemInterface";
import {ID} from "./gql.ID";
import {SalesCommentItem} from "./gql.salesCommentItem";
export type Invoice = {
	comments?: [SalesCommentItem] // Comments on the invoice.
	id: ID // The unique ID for a Invoice object.
	items?: [InvoiceItemInterface] // Invoiced product details.
	number: String // Sequential invoice number.
	total?: InvoiceTotal // Invoice total amount details.
}