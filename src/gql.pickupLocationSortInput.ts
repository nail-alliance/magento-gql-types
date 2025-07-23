import {SortEnum} from "./gql.sortEnum";
export type PickupLocationSortInput = {
	city?: SortEnum // City where pickup location is placed.
	contact_name?: SortEnum // Name of the contact person.
	country_id?: SortEnum // Id of the country in two letters.
	description?: SortEnum // Description of the pickup location.
	distance?: SortEnum // Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored.
	email?: SortEnum // Contact email of the pickup location.
	fax?: SortEnum // Contact fax of the pickup location.
	latitude?: SortEnum // Geographic latitude where pickup location is placed.
	longitude?: SortEnum // Geographic longitude where pickup location is placed.
	name?: SortEnum // The pickup location name. Customer use this to identify the pickup location.
	phone?: SortEnum // Contact phone number of the pickup location.
	pickup_location_code?: SortEnum // A code assigned to pickup location to identify the source.
	postcode?: SortEnum // Postcode where pickup location is placed.
	region?: SortEnum // Name of the region.
	region_id?: SortEnum // Id of the region.
	street?: SortEnum // Street where pickup location is placed.
}