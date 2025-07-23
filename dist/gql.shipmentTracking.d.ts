import { String } from "./gql.string";
export type ShipmentTracking = {
    carrier: String;
    number?: String;
    title: String;
};
