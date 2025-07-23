import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
import {String} from "./gql.string";
/** @deprecated */
export type Website = {
	/** @deprecated */
	code?: String // A code assigned to the website to identify it. The field should not be used on the storefront. Deprecated
	/** @deprecated */
	default_group_id?: String // The default group ID of the website. The field should not be used on the storefront. Deprecated
	/** @deprecated */
	id?: Int // The ID number assigned to the website. The field should not be used on the storefront. Deprecated
	/** @deprecated */
	is_default?: Boolean // Indicates whether this is the default website. The field should not be used on the storefront. Deprecated
	/** @deprecated */
	name?: String // The website name. Websites use this name to identify it easier. The field should not be used on the storefront. Deprecated
	/** @deprecated */
	sort_order?: Int // The attribute to use for sorting websites. The field should not be used on the storefront. Deprecated
}