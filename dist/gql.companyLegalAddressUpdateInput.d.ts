import { CustomerAddressRegionInput } from "./gql.customerAddressRegionInput";
import { CountryCodeEnum } from "./gql.countryCodeEnum";
import { String } from "./gql.string";
export type CompanyLegalAddressUpdateInput = {
    city?: String;
    country_id?: CountryCodeEnum;
    postcode?: String;
    region?: CustomerAddressRegionInput;
    street?: String[];
    telephone?: String;
};
