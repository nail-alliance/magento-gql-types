import {String} from "./gql.string";
import {Region} from "./gql.region";
export type Country = {
	available_regions?: Region[] // An array of regions within a particular country.
	full_name_english?: String // The name of the country in English.
	full_name_locale?: String // The name of the country in the current locale.
	id?: String // The unique ID for a Country object.
	three_letter_abbreviation?: String // The three-letter abbreviation of the country, such as USA.
	two_letter_abbreviation?: String // The two-letter abbreviation of the country, such as US.
}