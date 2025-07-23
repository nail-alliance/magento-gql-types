import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type CompanyTeamUpdateInput = {
	description?: String // An optional description of the team.
	id: ID // The unique ID of the CompanyTeam object to update.
	name?: String // The display name of the team.
}