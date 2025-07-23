import { SortField } from "./gql.sortField";
import { String } from "./gql.string";
export type SortFields = {
    default?: String;
    options?: SortField[];
};
