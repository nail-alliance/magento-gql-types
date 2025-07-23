import { CompanyLegalAddressUpdateInput } from "./gql.companyLegalAddressUpdateInput";
import { String } from "./gql.string";
export type CompanyUpdateInput = {
    company_email?: String;
    company_name?: String;
    legal_address?: CompanyLegalAddressUpdateInput;
    legal_name?: String;
    reseller_id?: String;
    vat_tax_id?: String;
};
