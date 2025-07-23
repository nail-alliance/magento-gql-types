import { ID } from "./gql.ID";
import { CompanyStructureEntity } from "./gql.companyStructureEntity";
export type CompanyStructureItem = {
    entity?: CompanyStructureEntity;
    id: ID;
    parent_id?: ID;
};
