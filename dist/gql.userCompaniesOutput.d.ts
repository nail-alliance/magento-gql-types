import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CompanyBasicInfo } from "./gql.companyBasicInfo";
export type UserCompaniesOutput = {
    items: CompanyBasicInfo[];
    page_info: SearchResultPageInfo;
};
