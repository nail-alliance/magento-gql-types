import {Float} from "./gql.float";
import {ID} from "./gql.ID";
import {Int} from "./gql.int";
export type GiftCardAmounts = {
	attribute_id?: Int // An internal attribute ID.
	uid: ID // The unique ID for a GiftCardAmounts object.
	value?: Float // The value of the gift card.
	/** @deprecated */
	value_id?: Int // An ID that is assigned to each unique gift card amount. Use uid instead Deprecated
	website_id?: Int // The ID of the website that generated the gift card.
	website_value?: Float // The value of the gift card.
}