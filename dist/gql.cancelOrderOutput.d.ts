import { CustomerOrder } from "./gql.customerOrder";
import { CancelOrderError } from "./gql.cancelOrderError";
import { String } from "./gql.string";
export type CancelOrderOutput = {
    error?: String;
    errorV2?: CancelOrderError;
    order?: CustomerOrder;
};
