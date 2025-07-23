import { Int } from "./gql.int";
import { String } from "./gql.string";
import { AttributeValueInput } from "./gql.attributeValueInput";
import { Boolean } from "./gql.boolean";
export type CustomerUpdateInput = {
    allow_remote_shopping_assistance?: Boolean;
    custom_attributes?: AttributeValueInput[];
    date_of_birth?: String;
    dob?: String;
    firstname?: String;
    gender?: Int;
    is_subscribed?: Boolean;
    lastname?: String;
    middlename?: String;
    prefix?: String;
    suffix?: String;
    taxvat?: String;
};
