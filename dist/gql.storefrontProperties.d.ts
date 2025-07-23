import { Boolean } from "./gql.boolean";
import { UseInLayeredNavigationOptions } from "./gql.useInLayeredNavigationOptions";
import { Int } from "./gql.int";
export type StorefrontProperties = {
    position?: Int;
    use_in_layered_navigation?: UseInLayeredNavigationOptions;
    use_in_product_listing?: Boolean;
    use_in_search_results_layered_navigation?: Boolean;
    visible_on_catalog_pages?: Boolean;
};
