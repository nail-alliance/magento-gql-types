import { SortEnum } from "./gql.sortEnum";
export type ProductAttributeSortInput = {
    name?: SortEnum;
    position?: SortEnum;
    price?: SortEnum;
    relevance?: SortEnum;
};
