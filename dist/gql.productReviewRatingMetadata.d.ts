import { ProductReviewRatingValueMetadata } from "./gql.productReviewRatingValueMetadata";
import { String } from "./gql.string";
export type ProductReviewRatingMetadata = {
    id: String;
    name: String;
    values: [ProductReviewRatingValueMetadata];
};
