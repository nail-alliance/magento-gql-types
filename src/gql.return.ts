import {ReturnShippingCarrier} from "./gql.returnShippingCarrier";
import {ReturnComment} from "./gql.returnComment";
import {ReturnCustomer} from "./gql.returnCustomer";
import {ReturnItem} from "./gql.returnItem";
import {CustomerOrder} from "./gql.customerOrder";
import {ReturnShipping} from "./gql.returnShipping";
import {ReturnStatus} from "./gql.returnStatus";
import {ID} from "./gql.ID";

export type Return = {
    "available_shipping_carriers"?: ReturnShippingCarrier[] | null | undefined
    "comments"?: ReturnComment[] | null | undefined
    "created_at": string
    "customer": ReturnCustomer
    "items"?: ReturnItem[] | null | undefined
    "number": string
    "order"?: CustomerOrder | null | undefined
    "shipping"?: ReturnShipping | null | undefined
    "status"?: ReturnStatus | null | undefined
    "uid": ID
}