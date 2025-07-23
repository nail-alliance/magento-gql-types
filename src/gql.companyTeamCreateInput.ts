import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type CompanyTeamCreateInput = {
	description?: String // An optional description of the team.
	name: String // The display name of the team.
	target_id?: ID // The ID of a node within a company's structure. This ID will be the parent of the created team.
}