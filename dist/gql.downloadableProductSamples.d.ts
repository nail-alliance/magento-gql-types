import { DownloadableFileTypeEnum } from "./gql.downloadableFileTypeEnum";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export type DownloadableProductSamples = {
    /** @deprecated */
    id?: Int;
    /** @deprecated */
    sample_file?: String;
    /** @deprecated */
    sample_type?: DownloadableFileTypeEnum;
    sample_url?: String;
    sort_order?: Int;
    title?: String;
};
