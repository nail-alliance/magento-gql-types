import {ProductReviewRating} from "./gql.productReviewRating";
import {ProductInterface} from "./gql.productInterface";
import {String} from "./gql.string";
import {Float} from "./gql.float";
export type ProductReview = {
	average_rating: Float // The average of all ratings for this product.
	created_at: String // The date the review was created.
	nickname: String // The customer's nickname. Defaults to the customer name, if logged in.
	product: ProductInterface // The reviewed product.
	ratings_breakdown: ProductReviewRating[] // An array of ratings by rating category, such as quality, price, and value.
	summary: String // The summary (title) of the review.
	text: String // The review text.
}