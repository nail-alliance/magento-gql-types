import {CompanyUserStatusEnum} from "./gql.companyUserStatusEnum";
import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type CompanyInvitationUserInput = {
	company_id: ID // The company unique identifier.
	customer_id: ID // The customer unique identifier.
	job_title?: String // The job title of a company user.
	status?: CompanyUserStatusEnum // Indicates whether the company user is ACTIVE or INACTIVE.
	telephone?: String // The phone number of the company user.
}