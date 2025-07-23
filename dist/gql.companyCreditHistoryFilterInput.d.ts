import { CompanyCreditOperationType } from "./gql.companyCreditOperationType";
import { String } from "./gql.string";
export type CompanyCreditHistoryFilterInput = {
    custom_reference_number?: String;
    operation_type?: CompanyCreditOperationType;
    updated_by?: String;
};
