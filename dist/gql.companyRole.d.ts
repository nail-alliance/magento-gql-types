import { ID } from "./gql.ID";
import { CompanyAclResource } from "./gql.companyAclResource";
export type CompanyRole = {
    "id": ID;
    "name"?: string | null | undefined;
    "permissions"?: CompanyAclResource[] | null | undefined;
    "users_count"?: number | null | undefined;
};
