import { ID } from "./gql.ID";
import { String } from "./gql.string";
import { Float } from "./gql.float";
import { DownloadableFileTypeEnum } from "./gql.downloadableFileTypeEnum";
import { Boolean } from "./gql.boolean";
import { Int } from "./gql.int";
export type DownloadableProductLinks = {
    /** @deprecated */
    id?: Int;
    /** @deprecated */
    is_shareable?: Boolean;
    /** @deprecated */
    link_type?: DownloadableFileTypeEnum;
    /** @deprecated */
    number_of_downloads?: Int;
    price?: Float;
    /** @deprecated */
    sample_file?: String;
    /** @deprecated */
    sample_type?: DownloadableFileTypeEnum;
    sample_url?: String;
    sort_order?: Int;
    title?: String;
    uid: ID;
};
