import { ProductReviewRatingInput } from "./gql.productReviewRatingInput";
import { String } from "./gql.string";
export type CreateProductReviewInput = {
    nickname: String;
    ratings: ProductReviewRatingInput[];
    sku: String;
    summary: String;
    text: String;
};
