import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {ProductInterface} from "./gql.productInterface";
import {SelectedCustomizableOption} from "./gql.selectedCustomizableOption";
export type SimpleRequisitionListItem = {
	customizable_options: SelectedCustomizableOption[] // Selected custom options for an item in the requisition list.
	product: ProductInterface // Details about a requisition list item.
	quantity: Float // The amount added.
	uid: ID // The unique ID for the requisition list item.
}