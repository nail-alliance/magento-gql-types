import { CompanyUserStatusEnum } from "./gql.companyUserStatusEnum";
import { String } from "./gql.string";
import { ID } from "./gql.ID";
export type CompanyInvitationUserInput = {
    company_id: ID;
    customer_id: ID;
    job_title?: String;
    status?: CompanyUserStatusEnum;
    telephone?: String;
};
