import { SimpleProduct } from "./gql.simpleProduct";
import { ConfigurableOptionAvailableForSelection } from "./gql.configurableOptionAvailableForSelection";
import { MediaGalleryInterface } from "./gql.mediaGalleryInterface";
import { ConfigurableProductOption } from "./gql.configurableProductOption";
export type ConfigurableProductOptionsSelection = {
    configurable_options?: [ConfigurableProductOption];
    media_gallery?: [MediaGalleryInterface];
    options_available_for_selection?: [ConfigurableOptionAvailableForSelection];
    variant?: SimpleProduct;
};
