import {FilterRangeTypeInput} from "./gql.filterRangeTypeInput";
import {FilterMatchTypeInput} from "./gql.filterMatchTypeInput";
import {FilterEqualTypeInput} from "./gql.filterEqualTypeInput";
export type ProductAttributeFilterInput = {
	activity?: FilterEqualTypeInput // Attribute label: Activity
	category_gear?: FilterEqualTypeInput // Attribute label: Category Gear
	/** @deprecated */
	category_id?: FilterEqualTypeInput // Deprecated: use category_uid to filter product by category ID. Deprecated
	category_uid?: FilterEqualTypeInput // Filter product by the unique ID for a CategoryInterface object.
	category_url_path?: FilterEqualTypeInput // Filter product by category URL path.
	climate?: FilterEqualTypeInput // Attribute label: Climate
	collar?: FilterEqualTypeInput // Attribute label: Collar
	color?: FilterEqualTypeInput // Attribute label: Color
	description?: FilterMatchTypeInput // Attribute label: Description
	eco_collection?: FilterEqualTypeInput // Attribute label: Eco Collection
	erin_recommends?: FilterEqualTypeInput // Attribute label: Erin Recommends
	features_bags?: FilterEqualTypeInput // Attribute label: Features
	format?: FilterEqualTypeInput // Attribute label: Format
	gender?: FilterEqualTypeInput // Attribute label: Gender
	material?: FilterEqualTypeInput // Attribute label: Material
	name?: FilterMatchTypeInput // Attribute label: Product Name
	new?: FilterEqualTypeInput // Attribute label: New
	pattern?: FilterEqualTypeInput // Attribute label: Pattern
	performance_fabric?: FilterEqualTypeInput // Attribute label: Performance Fabric
	price?: FilterRangeTypeInput // Attribute label: Price
	purpose?: FilterEqualTypeInput // Attribute label: Purpose
	sale?: FilterEqualTypeInput // Attribute label: Sale
	short_description?: FilterMatchTypeInput // Attribute label: Short Description
	size?: FilterEqualTypeInput // Attribute label: Size
	sku?: FilterEqualTypeInput // Attribute label: SKU
	sleeve?: FilterEqualTypeInput // Attribute label: Sleeve
	strap_bags?: FilterEqualTypeInput // Attribute label: Strap/Handle
	style_bags?: FilterEqualTypeInput // Attribute label: Style Bags
	style_bottom?: FilterEqualTypeInput // Attribute label: Style Bottom
	style_general?: FilterEqualTypeInput // Attribute label: Style General
	url_key?: FilterEqualTypeInput // The part of the URL that identifies the product
}