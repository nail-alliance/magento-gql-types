import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type CompanyRoleUpdateInput = {
    id: ID;
    name?: String;
    permissions?: [String];
};
