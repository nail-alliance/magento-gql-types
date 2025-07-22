import { CategoryInterface } from "./gql.categoryInterface";
import { ProductCustomAttributes } from "./gql.productCustomAttributes";
import { ProductImage } from "./gql.productImage";
import { MediaGalleryInterface } from "./gql.mediaGalleryInterface";
import { ComplexTextValue } from "./gql.complexTextValue";
import { MediaGalleryEntry } from "./gql.mediaGalleryEntry";
import { ProductPrices } from "./gql.productPrices";
import { PriceRange } from "./gql.priceRange";
import { TierPrice } from "./gql.tierPrice";
import { ProductLinksInterface } from "./gql.productLinksInterface";
import { ProductReviews } from "./gql.productReviews";
import { CatalogRule } from "./gql.catalogRule";
import { ProductStockStatus } from "./gql.productStockStatus";
import { ProductTierPrices } from "./gql.productTierPrices";
import { UrlRewrite } from "./gql.urlRewrite";
import { Money } from "./gql.money";
import { ID } from "./gql.ID";
import { Website } from "./gql.website";
export interface ProductInterface {
    /** @deprecated */
    "activity"?: string | null | undefined;
    /** @deprecated */
    "attribute_set_id"?: number | null | undefined;
    "canonical_url"?: string | null | undefined;
    "categories"?: CategoryInterface[] | null | undefined;
    /** @deprecated */
    "category_gear"?: string | null | undefined;
    /** @deprecated */
    "climate"?: string | null | undefined;
    /** @deprecated */
    "collar"?: string | null | undefined;
    /** @deprecated */
    "color"?: number | null | undefined;
    "country_of_manufacture"?: string | null | undefined;
    /** @deprecated */
    "created_at"?: string | null | undefined;
    "crosssell_products"?: ProductInterface[] | null | undefined;
    "custom_attributesV2"?: ProductCustomAttributes | null | undefined;
    "description"?: ComplexTextValue | null | undefined;
    /** @deprecated */
    "eco_collection"?: number | null | undefined;
    /** @deprecated */
    "erin_recommends"?: number | null | undefined;
    /** @deprecated */
    "features_bags"?: string | null | undefined;
    /** @deprecated */
    "format"?: number | null | undefined;
    /** @deprecated */
    "gender"?: string | null | undefined;
    "gift_message_available": boolean;
    "gift_wrapping_available": boolean;
    "gift_wrapping_price": Money;
    /** @deprecated */
    "id"?: number | null | undefined;
    "image"?: ProductImage | null | undefined;
    "is_returnable"?: string | null | undefined;
    "manufacturer"?: number | null | undefined;
    "material"?: string | null | undefined;
    "max_sale_qty"?: number | null | undefined;
    "media_gallery"?: MediaGalleryInterface[] | null | undefined;
    /** @deprecated */
    "media_gallery_entries"?: MediaGalleryEntry[] | null | undefined;
    "meta_description"?: string | null | undefined;
    "meta_keyword"?: string | null | undefined;
    "meta_title"?: string | null | undefined;
    "min_sale_qty"?: number | null | undefined;
    "name"?: string | null | undefined;
    /** @deprecated */
    "new": number;
    "new_from_date"?: string | null | undefined;
    "new_to_date"?: string | null | undefined;
    "only_x_left_in_stock"?: number | null | undefined;
    "options_container"?: string | null | undefined;
    /** @deprecated */
    "pattern"?: string | null | undefined;
    /** @deprecated */
    "performance_fabric"?: number | null | undefined;
    /** @deprecated */
    "price"?: ProductPrices | null | undefined;
    "price_range": PriceRange;
    "price_tiers"?: TierPrice[] | null | undefined;
    "product_links"?: ProductLinksInterface[] | null | undefined;
    /** @deprecated */
    "purpose"?: number | null | undefined;
    "quantity"?: number | null | undefined;
    "rating_summary": number;
    "related_products"?: ProductInterface[] | null | undefined;
    "review_count": number;
    "reviews": ProductReviews;
    "rules"?: CatalogRule[] | null | undefined;
    /** @deprecated */
    "sale"?: number | null | undefined;
    "short_description"?: ComplexTextValue | null | undefined;
    /** @deprecated */
    "size"?: number | null | undefined;
    "sku"?: string | null | undefined;
    /** @deprecated */
    "sleeve"?: string | null | undefined;
    "small_image"?: ProductImage | null | undefined;
    /** @deprecated */
    "special_from_date"?: string | null | undefined;
    "special_price"?: number | null | undefined;
    "special_to_date"?: string | null | undefined;
    "staged": boolean;
    "stock_status"?: ProductStockStatus | null | undefined;
    /** @deprecated */
    "strap_bags"?: string | null | undefined;
    /** @deprecated */
    "style_bags"?: string | null | undefined;
    /** @deprecated */
    "style_bottom"?: string | null | undefined;
    /** @deprecated */
    "style_general"?: string | null | undefined;
    "swatch_image"?: string | null | undefined;
    "thumbnail"?: ProductImage | null | undefined;
    /** @deprecated */
    "tier_price"?: number | null | undefined;
    /** @deprecated */
    "tier_prices"?: ProductTierPrices[] | null | undefined;
    /** @deprecated */
    "type_id"?: string | null | undefined;
    "uid": ID;
    /** @deprecated */
    "updated_at"?: string | null | undefined;
    "upsell_products"?: ProductInterface[] | null | undefined;
    "url_key"?: string | null | undefined;
    /** @deprecated */
    "url_path"?: string | null | undefined;
    "url_rewrites"?: UrlRewrite[] | null | undefined;
    "url_suffix"?: string | null | undefined;
    /** @deprecated */
    "websites"?: Website[] | null | undefined;
}
