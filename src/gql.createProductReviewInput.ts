import {ProductReviewRatingInput} from "./gql.productReviewRatingInput";
import {String} from "./gql.string";
export type CreateProductReviewInput = {
	nickname: String // The customer's nickname. Defaults to the customer name, if logged in.
	ratings: [ProductReviewRatingInput] // The ratings details by category. For example, Price: 5 stars, Quality: 4 stars, etc.
	sku: String // The SKU of the reviewed product.
	summary: String // The summary (title) of the review.
	text: String // The review text.
}