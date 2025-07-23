import {ID} from "./gql.ID";
import {ReturnItemStatus} from "./gql.returnItemStatus";
import {Float} from "./gql.float";
import {OrderItemInterface} from "./gql.orderItemInterface";
import {AttributeValueInterface} from "./gql.attributeValueInterface";
import {ReturnCustomAttribute} from "./gql.returnCustomAttribute";
export type ReturnItem = {
	/** @deprecated */
	custom_attributes?: ReturnCustomAttribute[] // Return item custom attributes that are visible on the storefront. Use custom_attributesV2 instead. Deprecated
	custom_attributesV2?: AttributeValueInterface[] // Custom attributes that are visible on the storefront.
	order_item: OrderItemInterface // Provides access to the product being returned, including information about selected and entered options.
	quantity: Float // The quantity of the item the merchant authorized to be returned.
	request_quantity: Float // The quantity of the item requested to be returned.
	status: ReturnItemStatus // The return status of the item.
	uid: ID // The unique ID for a ReturnItem object.
}