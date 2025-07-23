import { CompanyUserStatusEnum } from "./gql.companyUserStatusEnum";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type CompanyUserCreateInput = {
    email: String;
    firstname: String;
    job_title: String;
    lastname: String;
    role_id: ID;
    status: CompanyUserStatusEnum;
    target_id?: ID;
    telephone: String;
};
