import { UrlRewriteEntityTypeEnum } from "./gql.urlRewriteEntityTypeEnum";
import { Int } from "./gql.int";
import { ID } from "./gql.ID";
import { String } from "./gql.string";
export type EntityUrl = {
    /** @deprecated */
    canonical_url?: String;
    entity_uid?: ID;
    /** @deprecated */
    id?: Int;
    redirectCode?: Int;
    relative_url?: String;
    type?: UrlRewriteEntityTypeEnum;
};
