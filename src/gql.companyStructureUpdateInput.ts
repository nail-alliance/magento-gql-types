import {ID} from "./gql.ID";
export type CompanyStructureUpdateInput = {
	parent_tree_id: ID // The ID of a company that will be the new parent.
	tree_id: ID // The ID of the company team that is being moved to another parent.
}