import { CompanyInvitationUserInput } from "./gql.companyInvitationUserInput";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type CompanyInvitationInput = {
    code: String;
    role_id?: ID;
    user: CompanyInvitationUserInput;
};
