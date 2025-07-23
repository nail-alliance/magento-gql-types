import {String} from "./gql.string";
export type CompanyRoleCreateInput = {
	name: String // The name of the role to create.
	permissions: String[] // A list of resources the role can access.
}