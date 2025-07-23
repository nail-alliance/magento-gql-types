import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type CompanyRoleUpdateInput = {
	id: ID // The unique ID for a CompanyRole object.
	name?: String // The name of the role to update.
	permissions?: [String] // A list of resources the role can access.
}