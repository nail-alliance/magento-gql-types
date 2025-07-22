import {ReturnCustomAttribute} from "./gql.returnCustomAttribute";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {ReturnItemStatus} from "./gql.returnItemStatus";
import {ID} from "./gql.ID";

import {OrderItemInterface} from "./gql.orderItemInterface";

export type ReturnItem = {
    "custom_attributes"?: ReturnCustomAttribute[] | null | undefined
    "custom_attributesV2"?: AttributeValueInterface[] | null | undefined
    "order_item": OrderItemInterface
    "quantity": number
    "request_quantity": number
    "status": ReturnItemStatus
    "uid": ID
}