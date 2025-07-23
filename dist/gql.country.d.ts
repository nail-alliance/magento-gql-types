import { String } from "./gql.string";
import { Region } from "./gql.region";
export type Country = {
    available_regions?: Region[];
    full_name_english?: String;
    full_name_locale?: String;
    id?: String;
    three_letter_abbreviation?: String;
    two_letter_abbreviation?: String;
};
