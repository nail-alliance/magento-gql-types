import { UrlRewriteEntityTypeEnum } from "./gql.urlRewriteEntityTypeEnum";
import { String } from "./gql.string";
import { Int } from "./gql.int";
export interface RoutableInterface {
    redirect_code: Int;
    relative_url?: String;
    type?: UrlRewriteEntityTypeEnum;
}
