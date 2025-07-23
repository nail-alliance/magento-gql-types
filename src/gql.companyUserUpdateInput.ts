import {CompanyUserStatusEnum} from "./gql.companyUserStatusEnum";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type CompanyUserUpdateInput = {
	email?: String // The company user's email address.
	firstname?: String // The company user's first name.
	id: ID // The unique ID of a Customer object.
	job_title?: String // The company user's job title or function.
	lastname?: String // The company user's last name.
	role_id?: ID // The unique ID for a CompanyRole object.
	status?: CompanyUserStatusEnum // Indicates whether the company user is ACTIVE or INACTIVE.
	telephone?: String // The company user's phone number.
}