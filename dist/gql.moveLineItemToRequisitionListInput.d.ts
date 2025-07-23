import { ID } from "./gql.ID";
export type MoveLineItemToRequisitionListInput = {
    quote_item_uid: ID;
    quote_uid: ID;
    requisition_list_uid: ID;
};
