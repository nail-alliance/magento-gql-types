import { CustomerOrder } from "./gql.customerOrder";
import { Order } from "./gql.order";
import { PlaceOrderError } from "./gql.placeOrderError";
export type PlaceOrderOutput = {
    errors: PlaceOrderError[];
    /** @deprecated */
    order?: Order;
    orderV2?: CustomerOrder;
};
