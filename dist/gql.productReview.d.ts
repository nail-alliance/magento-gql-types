import { ProductReviewRating } from "./gql.productReviewRating";
import { ProductInterface } from "./gql.productInterface";
import { String } from "./gql.string";
import { Float } from "./gql.float";
export type ProductReview = {
    average_rating: Float;
    created_at: String;
    nickname: String;
    product: ProductInterface;
    ratings_breakdown: ProductReviewRating[];
    summary: String;
    text: String;
};
