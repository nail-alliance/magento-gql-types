import { UrlRewriteEntityTypeEnum } from "./gql.urlRewriteEntityTypeEnum";
import { Int } from "./gql.int";
import { String } from "./gql.string";
export type CmsPage = {
    content?: String;
    content_heading?: String;
    identifier?: String;
    meta_description?: String;
    meta_keywords?: String;
    meta_title?: String;
    page_layout?: String;
    redirect_code: Int;
    relative_url?: String;
    title?: String;
    type?: UrlRewriteEntityTypeEnum;
    url_key?: String;
};
