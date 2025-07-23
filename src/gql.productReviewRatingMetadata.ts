import {ProductReviewRatingValueMetadata} from "./gql.productReviewRatingValueMetadata";
import {String} from "./gql.string";
export type ProductReviewRatingMetadata = {
	id: String // An encoded rating ID.
	name: String // The label assigned to an aspect of a product that is being rated, such as quality or price.
	values: ProductReviewRatingValueMetadata[] // List of product review ratings sorted by position.
}