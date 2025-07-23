import {SwatchInputTypeEnum} from "./gql.swatchInputTypeEnum";
import {CustomAttributeOptionInterface} from "./gql.customAttributeOptionInterface";
import {Boolean} from "./gql.boolean";
import {AttributeFrontendInputEnum} from "./gql.attributeFrontendInputEnum";
import {AttributeEntityTypeEnum} from "./gql.attributeEntityTypeEnum";
import {String} from "./gql.string";
import {ID} from "./gql.ID";
import {CatalogAttributeApplyToEnum} from "./gql.catalogAttributeApplyToEnum";
export type CatalogAttributeMetadata = {
	apply_to?: [CatalogAttributeApplyToEnum] // To which catalog types an attribute can be applied.
	code: ID // The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
	default_value?: String // Default attribute value.
	entity_type: AttributeEntityTypeEnum // The type of entity that defines the attribute.
	frontend_class?: String // The frontend class of the attribute.
	frontend_input?: AttributeFrontendInputEnum // The frontend input type of the attribute.
	is_comparable?: Boolean // Whether a product or category attribute can be compared against another or not.
	is_filterable?: Boolean // Whether a product or category attribute can be filtered or not.
	is_filterable_in_search?: Boolean // Whether a product or category attribute can be filtered in search or not.
	is_html_allowed_on_front?: Boolean // Whether a product or category attribute can use HTML on front or not.
	is_required: Boolean // Whether the attribute value is required.
	is_searchable?: Boolean // Whether a product or category attribute can be searched or not.
	is_unique: Boolean // Whether the attribute value must be unique.
	is_used_for_price_rules?: Boolean // Whether a product or category attribute can be used for price rules or not.
	is_used_for_promo_rules?: Boolean // Whether a product or category attribute is used for promo rules or not.
	is_visible_in_advanced_search?: Boolean // Whether a product or category attribute is visible in advanced search or not.
	is_visible_on_front?: Boolean // Whether a product or category attribute is visible on front or not.
	is_wysiwyg_enabled?: Boolean // Whether a product or category attribute has WYSIWYG enabled or not.
	label?: String // The label assigned to the attribute.
	options: [CustomAttributeOptionInterface] // Attribute options.
	swatch_input_type?: SwatchInputTypeEnum // Input type of the swatch attribute option.
	update_product_preview_image?: Boolean // Whether update product preview image or not.
	use_product_image_for_swatch?: Boolean // Whether use product image for swatch or not.
	used_in_product_listing?: Boolean // Whether a product or category attribute is used in product listing or not.
}