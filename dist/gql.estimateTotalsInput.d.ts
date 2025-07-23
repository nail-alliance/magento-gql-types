import { ShippingMethodInput } from "./gql.shippingMethodInput";
import { String } from "./gql.string";
import { EstimateAddressInput } from "./gql.estimateAddressInput";
export type EstimateTotalsInput = {
    address: EstimateAddressInput;
    cart_id: String;
    shipping_method?: ShippingMethodInput;
};
