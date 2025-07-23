import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type CompanyTeam = {
    description?: String;
    id: ID;
    name?: String;
    structure_id: ID;
};
