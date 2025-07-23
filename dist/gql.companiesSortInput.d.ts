import { SortEnum } from "./gql.sortEnum";
import { CompaniesSortFieldEnum } from "./gql.companiesSortFieldEnum";
export type CompaniesSortInput = {
    field: CompaniesSortFieldEnum;
    order: SortEnum;
};
