import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type CustomerInput = {
    date_of_birth?: String;
    dob?: String;
    email?: String;
    firstname?: String;
    gender?: Int;
    is_subscribed?: Boolean;
    lastname?: String;
    middlename?: String;
    password?: String;
    prefix?: String;
    suffix?: String;
    taxvat?: String;
};
