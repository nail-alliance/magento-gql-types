import {ConfigurableProductOptionsValues} from "./gql.configurableProductOptionsValues";
import {Boolean} from "./gql.boolean";
import {ID} from "./gql.ID";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type ConfigurableProductOptions = {
	attribute_code?: String // A string that identifies the attribute.
	/** @deprecated */
	attribute_id?: String // The ID assigned to the attribute. Use attribute_uid instead. Deprecated
	/** @deprecated */
	attribute_id_v2?: Int // The ID assigned to the attribute. Use attribute_uid instead. Deprecated
	attribute_uid: ID // The unique ID for an Attribute object.
	/** @deprecated */
	id?: Int // The configurable option ID number assigned by the system. Use uid instead. Deprecated
	label?: String // A displayed string that describes the configurable product option.
	position?: Int // A number that indicates the order in which the attribute is displayed.
	/** @deprecated */
	product_id?: Int // This is the same as a product's id field. product_id is not needed and can be obtained from its parent. Deprecated
	uid: ID // The unique ID for a ConfigurableProductOptions object.
	use_default?: Boolean // Indicates whether the option is the default.
	values?: ConfigurableProductOptionsValues[] // An array that defines the value_index codes assigned to the configurable product.
}