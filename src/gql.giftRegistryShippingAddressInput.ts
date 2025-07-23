import {ID} from "./gql.ID";
import {CustomerAddressInput} from "./gql.customerAddressInput";
export type GiftRegistryShippingAddressInput = {
	address_data?: CustomerAddressInput // Defines the shipping address for this gift registry.
	address_id?: ID // The ID assigned to this customer address.
}