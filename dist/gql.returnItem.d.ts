import { ID } from "./gql.ID";
import { ReturnItemStatus } from "./gql.returnItemStatus";
import { Float } from "./gql.float";
import { OrderItemInterface } from "./gql.orderItemInterface";
import { AttributeValueInterface } from "./gql.attributeValueInterface";
import { ReturnCustomAttribute } from "./gql.returnCustomAttribute";
export type ReturnItem = {
    /** @deprecated */
    custom_attributes?: [ReturnCustomAttribute];
    custom_attributesV2?: [AttributeValueInterface];
    order_item: OrderItemInterface;
    quantity: Float;
    request_quantity: Float;
    status: ReturnItemStatus;
    uid: ID;
};
