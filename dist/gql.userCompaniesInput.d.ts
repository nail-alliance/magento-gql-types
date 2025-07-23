import { CompaniesSortInput } from "./gql.companiesSortInput";
import { Int } from "./gql.int";
export type UserCompaniesInput = {
    currentPage?: Int;
    pageSize?: Int;
    sort?: CompaniesSortInput[];
};
