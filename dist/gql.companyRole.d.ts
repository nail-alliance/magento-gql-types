import { Int } from "./gql.int";
import { CompanyAclResource } from "./gql.companyAclResource";
import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type CompanyRole = {
    id: ID;
    name?: String;
    permissions?: CompanyAclResource[];
    users_count?: Int;
};
