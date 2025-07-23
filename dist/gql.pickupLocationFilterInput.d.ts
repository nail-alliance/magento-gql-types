import { FilterTypeInput } from "./gql.filterTypeInput";
export type PickupLocationFilterInput = {
    city?: FilterTypeInput;
    country_id?: FilterTypeInput;
    name?: FilterTypeInput;
    pickup_location_code?: FilterTypeInput;
    postcode?: FilterTypeInput;
    region?: FilterTypeInput;
    region_id?: FilterTypeInput;
    street?: FilterTypeInput;
};
