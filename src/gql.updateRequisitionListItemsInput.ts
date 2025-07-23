import {String} from "./gql.string";
import {Float} from "./gql.float";
import {ID} from "./gql.ID";
import {EnteredOptionInput} from "./gql.enteredOptionInput";
export type UpdateRequisitionListItemsInput = {
	entered_options?: EnteredOptionInput[] // An array of customer-entered options.
	item_id: ID // The ID of the requisition list item to update.
	quantity?: Float // The new quantity of the item.
	selected_options?: String[] // An array of selected option IDs.
}