import { FilterMatchTypeEnum } from "./gql.filterMatchTypeEnum";
import { String } from "./gql.string";
export type FilterMatchTypeInput = {
    match?: String;
    match_type?: FilterMatchTypeEnum;
};
