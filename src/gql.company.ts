import {CompanyUsers} from "./gql.companyUsers";
import {CompanyTeam} from "./gql.companyTeam";
import {CompanyStructure} from "./gql.companyStructure";
import {CompanySalesRepresentative} from "./gql.companySalesRepresentative";
import {CompanyRoles} from "./gql.companyRoles";
import {CompanyRole} from "./gql.companyRole";
import {CompanyLegalAddress} from "./gql.companyLegalAddress";
import {ID} from "./gql.ID";
import {String} from "./gql.string";
import {CompanyCreditHistory} from "./gql.companyCreditHistory";
import {CompanyCredit} from "./gql.companyCredit";
import {Customer} from "./gql.customer";
import {CompanyAclResource} from "./gql.companyAclResource";
export type Company = {
	acl_resources?: [CompanyAclResource] // The list of all resources defined within the company.
	company_admin?: Customer // An object containing information about the company administrator.
	credit: CompanyCredit // Company credit balances and limits.
	credit_history: CompanyCreditHistory // Details about the history of company credit operations.
	email?: String // The email address of the company contact.
	id: ID // The unique ID of a Company object.
	legal_address?: CompanyLegalAddress // The address where the company is registered to conduct business.
	legal_name?: String // The full legal name of the company.
	name?: String // The name of the company.
	payment_methods?: [String] // The list of payment methods available to a company.
	reseller_id?: String // The resale number that is assigned to the company for tax reporting purposes.
	role?: CompanyRole // A company role filtered by the unique ID of a CompanyRole object.
	roles: CompanyRoles // An object that contains a list of company roles.
	sales_representative?: CompanySalesRepresentative // An object containing information about the company sales representative.
	structure?: CompanyStructure // The company structure of teams and customers in depth-first order.
	team?: CompanyTeam // The company team data filtered by the unique ID for a CompanyTeam object.
	user?: Customer // A company user filtered by the unique ID of a Customer object.
	users?: CompanyUsers // An object that contains a list of company users based on activity status.
	vat_tax_id?: String // The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes.
}