import { ID } from "./gql.ID";
import { RequistionListItems } from "./gql.requistionListItems";
export type RequisitionList = {
    "description"?: string | null | undefined;
    "items": RequistionListItems;
    "items_count": number;
    "name": string;
    "uid": ID;
    "updated_at"?: string | null | undefined;
};
