import {String} from "./gql.string";
import {Int} from "./gql.int";
import {ID} from "./gql.ID";
export type CompanyAclResource = {
	children?: CompanyAclResource[] // An array of sub-resources.
	id: ID // The unique ID for a CompanyAclResource object.
	sort_order?: Int // The sort order of an ACL resource.
	text?: String // The label assigned to the ACL resource.
}