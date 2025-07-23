import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type CompanyTeamCreateInput = {
    description?: String;
    name: String;
    target_id?: ID;
};
