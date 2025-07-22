import { ID } from "./gql.ID";
export type Breadcrumb = {
    "category_id"?: number | null | undefined;
    "category_level"?: number | null | undefined;
    "category_name"?: string | null | undefined;
    "category_uid": ID;
    "category_url_key"?: string | null | undefined;
    "category_url_path"?: string | null | undefined;
};
