import {ID} from "./gql.ID";
import {CompanyStructureEntity} from "./gql.companyStructureEntity";
export type CompanyStructureItem = {
	entity?: CompanyStructureEntity // A union of CompanyTeam and Customer objects.
	id: ID // The unique ID for a CompanyStructureItem object.
	parent_id?: ID // The ID of the parent item in the company hierarchy.
}