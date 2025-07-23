import { ID } from "./gql.ID";
import { CustomerAddressInput } from "./gql.customerAddressInput";
export type GiftRegistryShippingAddressInput = {
    address_data?: CustomerAddressInput;
    address_id?: ID;
};
