import {SimpleProduct} from "./gql.simpleProduct";
import {ConfigurableOptionAvailableForSelection} from "./gql.configurableOptionAvailableForSelection";
import {MediaGalleryInterface} from "./gql.mediaGalleryInterface";
import {ConfigurableProductOption} from "./gql.configurableProductOption";
export type ConfigurableProductOptionsSelection = {
	configurable_options?: ConfigurableProductOption[] // An array of all possible configurable options.
	media_gallery?: MediaGalleryInterface[] // Product images and videos corresponding to the specified configurable options selection.
	options_available_for_selection?: ConfigurableOptionAvailableForSelection[] // The configurable options available for further selection based on the current selection.
	variant?: SimpleProduct // A variant represented by the specified configurable options selection. The value is expected to be null until selections are made for each configurable option.
}