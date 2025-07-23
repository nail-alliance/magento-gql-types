import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CompanyRole } from "./gql.companyRole";
export type CompanyRoles = {
    items: CompanyRole[];
    page_info?: SearchResultPageInfo;
    total_count: Int;
};
