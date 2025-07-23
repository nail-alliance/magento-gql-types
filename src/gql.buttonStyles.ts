import {Boolean} from "./gql.boolean";
import {Int} from "./gql.int";
import {String} from "./gql.string";
export type ButtonStyles = {
	color?: String // The button color
	height?: Int // The button height in pixels
	label?: String // The button label
	layout?: String // The button layout
	shape?: String // The button shape
	tagline?: Boolean // Indicates whether the tagline is displayed
	use_default_height?: Boolean // Defines if the button uses default height. If the value is false, the value of height is used
}