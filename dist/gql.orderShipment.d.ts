import { ShipmentTracking } from "./gql.shipmentTracking";
import { String } from "./gql.string";
import { ShipmentItemInterface } from "./gql.shipmentItemInterface";
import { ID } from "./gql.ID";
import { SalesCommentItem } from "./gql.salesCommentItem";
export type OrderShipment = {
    comments?: SalesCommentItem[];
    id: ID;
    items?: ShipmentItemInterface[];
    number: String;
    tracking?: ShipmentTracking[];
};
