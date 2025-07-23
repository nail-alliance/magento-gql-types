import { ProductMediaGalleryEntriesVideoContent } from "./gql.productMediaGalleryEntriesVideoContent";
import { ID } from "./gql.ID";
import { Int } from "./gql.int";
import { String } from "./gql.string";
import { Boolean } from "./gql.boolean";
import { ProductMediaGalleryEntriesContent } from "./gql.productMediaGalleryEntriesContent";
export type MediaGalleryEntry = {
    content?: ProductMediaGalleryEntriesContent;
    disabled?: Boolean;
    file?: String;
    /** @deprecated */
    id?: Int;
    label?: String;
    media_type?: String;
    position?: Int;
    types?: [String];
    uid: ID;
    video_content?: ProductMediaGalleryEntriesVideoContent;
};
