import {Region} from "./gql.region";

export type Country = {
    "available_regions"?: Region[] | null | undefined
    "full_name_english"?: string | null | undefined
    "full_name_locale"?: string | null | undefined
    "id"?: string | null | undefined
    "three_letter_abbreviation"?: string | null | undefined
    "two_letter_abbreviation"?: string | null | undefined
}