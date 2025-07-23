import {Int} from "./gql.int";
import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {CartItemInterface} from "./gql.cartItemInterface";
export type CartItems = {
	items: CartItemInterface[] // An array of products that have been added to the cart.
	page_info?: SearchResultPageInfo // Metadata for pagination rendering.
	total_count: Int // The number of returned cart items.
}