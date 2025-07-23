import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type CompanyBasicInfo = {
    id: ID;
    legal_name?: String;
    name?: String;
};
