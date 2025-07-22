import { SalesCommentItem } from "./gql.salesCommentItem";
import { ID } from "./gql.ID";
import { ShipmentItemInterface } from "./gql.shipmentItemInterface";
import { ShipmentTracking } from "./gql.shipmentTracking";
export type OrderShipment = {
    "comments"?: SalesCommentItem[] | null | undefined;
    "id": ID;
    "items"?: ShipmentItemInterface[] | null | undefined;
    "number": string;
    "tracking"?: ShipmentTracking[] | null | undefined;
};
