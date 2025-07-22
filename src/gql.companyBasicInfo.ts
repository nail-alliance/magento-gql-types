import {ID} from "./gql.ID";

export type CompanyBasicInfo = {
    "id": ID
    "legal_name"?: string | null | undefined
    "name"?: string | null | undefined
}