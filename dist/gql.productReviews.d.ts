import { ProductReview } from "./gql.productReview";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
export type ProductReviews = {
    "items": ProductReview[];
    "page_info": SearchResultPageInfo;
};
