import { CompanyCreditOperationUser } from "./gql.companyCreditOperationUser";
import { CompanyCreditOperationType } from "./gql.companyCreditOperationType";
import { String } from "./gql.string";
import { CompanyCredit } from "./gql.companyCredit";
import { Money } from "./gql.money";
export type CompanyCreditOperation = {
    amount?: Money;
    balance: CompanyCredit;
    custom_reference_number?: String;
    date: String;
    type: CompanyCreditOperationType;
    updated_by: CompanyCreditOperationUser;
};
