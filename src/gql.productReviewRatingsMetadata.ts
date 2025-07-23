import {ProductReviewRatingMetadata} from "./gql.productReviewRatingMetadata";
export type ProductReviewRatingsMetadata = {
	items: [ProductReviewRatingMetadata] // An array of product reviews sorted by position.
}