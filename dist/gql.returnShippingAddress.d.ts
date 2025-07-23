import { Region } from "./gql.region";
import { Country } from "./gql.country";
import { String } from "./gql.string";
export type ReturnShippingAddress = {
    city: String;
    contact_name?: String;
    country: Country;
    postcode: String;
    region: Region;
    street: [String];
    telephone?: String;
};
