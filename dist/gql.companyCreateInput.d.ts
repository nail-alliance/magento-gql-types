import { CompanyLegalAddressCreateInput } from "./gql.companyLegalAddressCreateInput";
import { String } from "./gql.string";
import { CompanyAdminInput } from "./gql.companyAdminInput";
export type CompanyCreateInput = {
    company_admin: CompanyAdminInput;
    company_email: String;
    company_name: String;
    legal_address: CompanyLegalAddressCreateInput;
    legal_name?: String;
    reseller_id?: String;
    vat_tax_id?: String;
};
