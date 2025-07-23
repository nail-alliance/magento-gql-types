import {SearchResultPageInfo} from "./gql.searchResultPageInfo";
import {ProductReview} from "./gql.productReview";
export type ProductReviews = {
	items: ProductReview[] // An array of product reviews.
	page_info: SearchResultPageInfo // Metadata for pagination rendering.
}