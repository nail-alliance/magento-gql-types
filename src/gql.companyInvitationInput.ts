import {CompanyInvitationUserInput} from "./gql.companyInvitationUserInput";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
export type CompanyInvitationInput = {
	code: String // The invitation code.
	role_id?: ID // The company role id.
	user: CompanyInvitationUserInput // Company user attributes in the invitation.
}