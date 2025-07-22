import { ProductInterface } from "./gql.productInterface";
export type WishlistItem = {
    "added_at"?: string | null | undefined;
    "description"?: string | null | undefined;
    "id"?: number | null | undefined;
    "product"?: ProductInterface | null | undefined;
    "qty"?: number | null | undefined;
};
