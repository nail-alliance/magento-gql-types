import { Breadcrumb } from "./gql.breadcrumb";
import { CmsBlock } from "./gql.cmsBlock";
import { CategoryProducts } from "./gql.categoryProducts";
import { ID } from "./gql.ID";
export interface CategoryInterface {
    "automatic_sorting"?: string | null | undefined;
    "available_sort_by"?: string[] | null | undefined;
    "breadcrumbs"?: Breadcrumb[] | null | undefined;
    "canonical_url"?: string | null | undefined;
    "children_count"?: string | null | undefined;
    "cms_block"?: CmsBlock | null | undefined;
    /** @deprecated */
    "created_at"?: string | null | undefined;
    "custom_layout_update_file"?: string | null | undefined;
    "default_sort_by"?: string | null | undefined;
    "description"?: string | null | undefined;
    "display_mode"?: string | null | undefined;
    "filter_price_range"?: number | null | undefined;
    /** @deprecated */
    "id"?: number | null | undefined;
    "image"?: string | null | undefined;
    "include_in_menu"?: number | null | undefined;
    "is_anchor"?: number | null | undefined;
    "landing_page"?: number | null | undefined;
    "level"?: number | null | undefined;
    "meta_description"?: string | null | undefined;
    "meta_keywords"?: string | null | undefined;
    "meta_title"?: string | null | undefined;
    "name"?: string | null | undefined;
    "path"?: string | null | undefined;
    "path_in_store"?: string | null | undefined;
    "position"?: number | null | undefined;
    "product_count"?: number | null | undefined;
    "products"?: CategoryProducts | null | undefined;
    "staged": boolean;
    "uid": ID;
    "updated_at": string;
    "url_key": string;
    "url_path": string;
    "url_suffix": string;
}
