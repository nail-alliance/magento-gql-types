import {CompanyLegalAddressUpdateInput} from "./gql.companyLegalAddressUpdateInput";
import {String} from "./gql.string";
export type CompanyUpdateInput = {
	company_email?: String // The email address of the company contact.
	company_name?: String // The name of the company to update.
	legal_address?: CompanyLegalAddressUpdateInput // The legal address data of the company.
	legal_name?: String // The full legal name of the company.
	reseller_id?: String // The resale number that is assigned to the company for tax reporting purposes.
	vat_tax_id?: String // The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes.
}