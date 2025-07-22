import { ProductInterface } from "./gql.productInterface";
import { ProductReviewRating } from "./gql.productReviewRating";
export type ProductReview = {
    "average_rating": number;
    "created_at": string;
    "nickname": string;
    "product": ProductInterface;
    "ratings_breakdown": ProductReviewRating[];
    "summary": string;
    "text": string;
};
