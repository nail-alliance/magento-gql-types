import { ID } from "./gql.ID";
import { ProductMediaGalleryEntriesContent } from "./gql.productMediaGalleryEntriesContent";
import { ProductMediaGalleryEntriesVideoContent } from "./gql.productMediaGalleryEntriesVideoContent";
export type MediaGalleryEntry = {
    "content"?: ProductMediaGalleryEntriesContent | null | undefined;
    "disabled"?: boolean | null | undefined;
    "file"?: string | null | undefined;
    /** @deprecated */
    "id"?: number | null | undefined;
    "label"?: string | null | undefined;
    "media_type"?: string | null | undefined;
    "position"?: number | null | undefined;
    "types"?: string[] | null | undefined;
    "uid": ID;
    "video_content"?: ProductMediaGalleryEntriesVideoContent | null | undefined;
};
