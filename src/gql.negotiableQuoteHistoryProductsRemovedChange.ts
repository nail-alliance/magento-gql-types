import {ProductInterface} from "./gql.productInterface";
import {ID} from "./gql.ID";
export type NegotiableQuoteHistoryProductsRemovedChange = {
	products_removed_from_catalog?: ID[] // A list of product IDs the seller removed from the catalog.
	products_removed_from_quote?: ProductInterface[] // A list of products removed from the negotiable quote by either the buyer or the seller.
}