import { CustomerAddressRegionInput } from "./gql.customerAddressRegionInput";
import { String } from "./gql.string";
import { CountryCodeEnum } from "./gql.countryCodeEnum";
export type EstimateAddressInput = {
    country_code: CountryCodeEnum;
    postcode?: String;
    region?: CustomerAddressRegionInput;
};
