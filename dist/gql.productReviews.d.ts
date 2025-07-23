import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { ProductReview } from "./gql.productReview";
export type ProductReviews = {
    items: [ProductReview];
    page_info: SearchResultPageInfo;
};
