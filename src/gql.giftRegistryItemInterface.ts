import {ID} from "./gql.ID";
import {Float} from "./gql.float";
import {ProductInterface} from "./gql.productInterface";
import {String} from "./gql.string";
export interface GiftRegistryItemInterface {
	created_at: String // The date the product was added to the gift registry.
	note?: String // A brief message about the gift registry item.
	product?: ProductInterface // Details about the gift registry item.
	quantity: Float // The requested quantity of the product.
	quantity_fulfilled: Float // The fulfilled quantity of the product.
	uid: ID // The unique ID of a gift registry item.
}