import {String} from "./gql.string";
export type ShipmentTracking = {
	carrier: String // The shipping carrier for the order delivery.
	number?: String // The tracking number of the order shipment.
	title: String // The shipment tracking title.
}