import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type CompanyTeam = {
	description?: String // An optional description of the team.
	id: ID // The unique ID for a CompanyTeam object.
	name?: String // The display name of the team.
	structure_id: ID // ID of the company structure
}