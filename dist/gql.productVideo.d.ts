import { ProductMediaGalleryEntriesVideoContent } from "./gql.productMediaGalleryEntriesVideoContent";
import { Int } from "./gql.int";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
export type ProductVideo = {
    disabled?: Boolean;
    label?: String;
    position?: Int;
    url?: String;
    video_content?: ProductMediaGalleryEntriesVideoContent;
};
