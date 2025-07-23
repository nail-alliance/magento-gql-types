import {Int} from "./gql.int";
import {CompanyAclResource} from "./gql.companyAclResource";
import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type CompanyRole = {
	id: ID // The unique ID for a CompanyRole object.
	name?: String // The name assigned to the role.
	permissions?: [CompanyAclResource] // A list of permission resources defined for a role.
	users_count?: Int // The total number of users assigned the specified role.
}