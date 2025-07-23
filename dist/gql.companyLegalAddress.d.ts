import { CustomerAddressRegion } from "./gql.customerAddressRegion";
import { CountryCodeEnum } from "./gql.countryCodeEnum";
import { String } from "./gql.string";
export type CompanyLegalAddress = {
    city?: String;
    country_code?: CountryCodeEnum;
    postcode?: String;
    region?: CustomerAddressRegion;
    street?: String[];
    telephone?: String;
};
