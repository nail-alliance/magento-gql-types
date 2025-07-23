import {Int} from "./gql.int";
import {String} from "./gql.string";
import {AttributeValueInput} from "./gql.attributeValueInput";
export type CompanyAdminInput = {
	custom_attributes?: AttributeValueInput[] // The company administrator's custom attributes.
	email: String // The email address of the company administrator.
	firstname: String // The company administrator's first name.
	gender?: Int // The company administrator's gender (Male - 1, Female - 2, Not Specified - 3).
	job_title?: String // The job title of the company administrator.
	lastname: String // The company administrator's last name.
	telephone?: String // The phone number of the company administrator.
}