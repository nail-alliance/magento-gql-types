import {CompanyUserStatusEnum} from "./gql.companyUserStatusEnum";
export type CompanyUsersFilterInput = {
	status?: CompanyUserStatusEnum // The activity status to filter on.
}