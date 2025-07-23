import { CompanyCreditOperationUserType } from "./gql.companyCreditOperationUserType";
import { String } from "./gql.string";
export type CompanyCreditOperationUser = {
    name: String;
    type: CompanyCreditOperationUserType;
};
