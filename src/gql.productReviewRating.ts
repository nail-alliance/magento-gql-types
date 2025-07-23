import {String} from "./gql.string";
export type ProductReviewRating = {
	name: String // The label assigned to an aspect of a product that is being rated, such as quality or price.
	value: String // The rating value given by customer. By default, possible values range from 1 to 5.
}