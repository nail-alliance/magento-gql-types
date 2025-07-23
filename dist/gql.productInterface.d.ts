import { Website } from "./gql.website";
import { UrlRewrite } from "./gql.urlRewrite";
import { ID } from "./gql.ID";
import { ProductTierPrices } from "./gql.productTierPrices";
import { ProductStockStatus } from "./gql.productStockStatus";
import { CatalogRule } from "./gql.catalogRule";
import { ProductReviews } from "./gql.productReviews";
import { ProductLinksInterface } from "./gql.productLinksInterface";
import { TierPrice } from "./gql.tierPrice";
import { PriceRange } from "./gql.priceRange";
import { ProductPrices } from "./gql.productPrices";
import { MediaGalleryEntry } from "./gql.mediaGalleryEntry";
import { MediaGalleryInterface } from "./gql.mediaGalleryInterface";
import { Float } from "./gql.float";
import { ProductImage } from "./gql.productImage";
import { Money } from "./gql.money";
import { Boolean } from "./gql.boolean";
import { ComplexTextValue } from "./gql.complexTextValue";
import { ProductCustomAttributes } from "./gql.productCustomAttributes";
import { CategoryInterface } from "./gql.categoryInterface";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export interface ProductInterface {
    /** @deprecated */
    activity?: String;
    /** @deprecated */
    attribute_set_id?: Int;
    canonical_url?: String;
    categories?: [CategoryInterface];
    /** @deprecated */
    category_gear?: String;
    /** @deprecated */
    climate?: String;
    /** @deprecated */
    collar?: String;
    /** @deprecated */
    color?: Int;
    country_of_manufacture?: String;
    /** @deprecated */
    created_at?: String;
    crosssell_products?: [ProductInterface];
    custom_attributesV2?: ProductCustomAttributes;
    description?: ComplexTextValue;
    /** @deprecated */
    eco_collection?: Int;
    /** @deprecated */
    erin_recommends?: Int;
    /** @deprecated */
    features_bags?: String;
    /** @deprecated */
    format?: Int;
    /** @deprecated */
    gender?: String;
    gift_message_available: Boolean;
    gift_wrapping_available: Boolean;
    gift_wrapping_price?: Money;
    /** @deprecated */
    id?: Int;
    image?: ProductImage;
    is_returnable?: String;
    /** @deprecated */
    manufacturer?: Int;
    /** @deprecated */
    material?: String;
    max_sale_qty?: Float;
    media_gallery?: [MediaGalleryInterface];
    /** @deprecated */
    media_gallery_entries?: [MediaGalleryEntry];
    meta_description?: String;
    meta_keyword?: String;
    meta_title?: String;
    min_sale_qty?: Float;
    name?: String;
    /** @deprecated */
    new?: Int;
    new_from_date?: String;
    new_to_date?: String;
    only_x_left_in_stock?: Float;
    options_container?: String;
    /** @deprecated */
    pattern?: String;
    /** @deprecated */
    performance_fabric?: Int;
    /** @deprecated */
    price?: ProductPrices;
    price_range: PriceRange;
    price_tiers?: [TierPrice];
    product_links?: [ProductLinksInterface];
    /** @deprecated */
    purpose?: Int;
    quantity?: Float;
    rating_summary: Float;
    related_products?: [ProductInterface];
    review_count: Int;
    reviews: ProductReviews;
    rules?: [CatalogRule];
    /** @deprecated */
    sale?: Int;
    short_description?: ComplexTextValue;
    /** @deprecated */
    size?: Int;
    sku?: String;
    /** @deprecated */
    sleeve?: String;
    small_image?: ProductImage;
    /** @deprecated */
    special_from_date?: String;
    special_price?: Float;
    special_to_date?: String;
    staged: Boolean;
    stock_status?: ProductStockStatus;
    /** @deprecated */
    strap_bags?: String;
    /** @deprecated */
    style_bags?: String;
    /** @deprecated */
    style_bottom?: String;
    /** @deprecated */
    style_general?: String;
    swatch_image?: String;
    thumbnail?: ProductImage;
    /** @deprecated */
    tier_price?: Float;
    /** @deprecated */
    tier_prices?: [ProductTierPrices];
    /** @deprecated */
    type_id?: String;
    uid: ID;
    /** @deprecated */
    updated_at?: String;
    upsell_products?: [ProductInterface];
    url_key?: String;
    /** @deprecated */
    url_path?: String;
    url_rewrites?: [UrlRewrite];
    url_suffix?: String;
    /** @deprecated */
    websites?: [Website];
}
