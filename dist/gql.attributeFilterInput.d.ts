import { Boolean } from "./gql.boolean";
export type AttributeFilterInput = {
    is_comparable?: Boolean;
    is_filterable?: Boolean;
    is_filterable_in_search?: Boolean;
    is_html_allowed_on_front?: Boolean;
    is_searchable?: Boolean;
    is_used_for_customer_segment?: Boolean;
    is_used_for_price_rules?: Boolean;
    is_used_for_promo_rules?: Boolean;
    is_visible_in_advanced_search?: Boolean;
    is_visible_on_front?: Boolean;
    is_wysiwyg_enabled?: Boolean;
    used_in_product_listing?: Boolean;
};
