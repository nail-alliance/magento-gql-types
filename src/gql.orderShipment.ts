import {ShipmentTracking} from "./gql.shipmentTracking";
import {String} from "./gql.string";
import {ShipmentItemInterface} from "./gql.shipmentItemInterface";
import {ID} from "./gql.ID";
import {SalesCommentItem} from "./gql.salesCommentItem";
export type OrderShipment = {
	comments?: [SalesCommentItem] // Comments added to the shipment.
	id: ID // The unique ID for a OrderShipment object.
	items?: [ShipmentItemInterface] // An array of items included in the shipment.
	number: String // The sequential credit shipment number.
	tracking?: [ShipmentTracking] // An array of shipment tracking details.
}