import { String } from "./gql.string";
import { Int } from "./gql.int";
import { ID } from "./gql.ID";
export type CompanyAclResource = {
    children?: [CompanyAclResource];
    id: ID;
    sort_order?: Int;
    text?: String;
};
