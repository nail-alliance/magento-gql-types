import { Int } from "./gql.int";
import { SearchResultPageInfo } from "./gql.searchResultPageInfo";
import { CompanyCreditOperation } from "./gql.companyCreditOperation";
export type CompanyCreditHistory = {
    items: CompanyCreditOperation[];
    page_info: SearchResultPageInfo;
    total_count?: Int;
};
