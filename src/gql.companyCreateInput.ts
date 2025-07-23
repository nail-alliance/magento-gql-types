import {CompanyLegalAddressCreateInput} from "./gql.companyLegalAddressCreateInput";
import {String} from "./gql.string";
import {CompanyAdminInput} from "./gql.companyAdminInput";
export type CompanyCreateInput = {
	company_admin: CompanyAdminInput // Defines the company administrator.
	company_email: String // The email address of the company contact.
	company_name: String // The name of the company to create.
	legal_address: CompanyLegalAddressCreateInput // Defines legal address data of the company.
	legal_name?: String // The full legal name of the company.
	reseller_id?: String // The resale number that is assigned to the company for tax reporting purposes.
	vat_tax_id?: String // The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes.
}