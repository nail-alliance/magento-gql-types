import {CompanyUserStatusEnum} from "./gql.companyUserStatusEnum";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type CompanyUserCreateInput = {
	email: String // The company user's email address
	firstname: String // The company user's first name.
	job_title: String // The company user's job title or function.
	lastname: String // The company user's last name.
	role_id: ID // The unique ID for a CompanyRole object.
	status: CompanyUserStatusEnum // Indicates whether the company user is ACTIVE or INACTIVE.
	target_id?: ID // The ID of a node within a company's structure. This ID will be the parent of the created company user.
	telephone: String // The company user's phone number.
}