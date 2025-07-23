import { Boolean } from "./gql.boolean";
import { RequisitionLists } from "./gql.requisitionLists";
export type DeleteRequisitionListOutput = {
    requisition_lists?: RequisitionLists;
    status: Boolean;
};
