import {String} from "./gql.string";
import {ID} from "./gql.ID";
export type CompanyBasicInfo = {
	id: ID // The unique ID of a Company object.
	legal_name?: String // The full legal name of the company.
	name?: String // The name of the company.
}