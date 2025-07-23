import { CompanyUserStatusEnum } from "./gql.companyUserStatusEnum";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type CompanyUserUpdateInput = {
    email?: String;
    firstname?: String;
    id: ID;
    job_title?: String;
    lastname?: String;
    role_id?: ID;
    status?: CompanyUserStatusEnum;
    telephone?: String;
};
