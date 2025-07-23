import { Int } from "./gql.int";
import { String } from "./gql.string";
import { AttributeValueInput } from "./gql.attributeValueInput";
export type CompanyAdminInput = {
    custom_attributes?: AttributeValueInput[];
    email: String;
    firstname: String;
    gender?: Int;
    job_title?: String;
    lastname: String;
    telephone?: String;
};
