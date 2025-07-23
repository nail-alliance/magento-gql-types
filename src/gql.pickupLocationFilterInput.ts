import {FilterTypeInput} from "./gql.filterTypeInput";
export type PickupLocationFilterInput = {
	city?: FilterTypeInput // Filter by city.
	country_id?: FilterTypeInput // Filter by country.
	name?: FilterTypeInput // Filter by pickup location name.
	pickup_location_code?: FilterTypeInput // Filter by pickup location code.
	postcode?: FilterTypeInput // Filter by postcode.
	region?: FilterTypeInput // Filter by region.
	region_id?: FilterTypeInput // Filter by region id.
	street?: FilterTypeInput // Filter by street.
}