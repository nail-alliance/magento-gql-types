import { String } from "./gql.string";
export type OrderCustomerInfo = {
    firstname: String;
    lastname?: String;
    middlename?: String;
    prefix?: String;
    suffix?: String;
};
