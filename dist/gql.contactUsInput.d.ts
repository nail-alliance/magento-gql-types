import { String } from "./gql.string";
export type ContactUsInput = {
    comment: String;
    email: String;
    name: String;
    telephone?: String;
};
