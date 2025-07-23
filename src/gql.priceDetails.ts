import {Float} from "./gql.float";
export type PriceDetails = {
	discount_percentage?: Float // The percentage of discount applied to the main product price
	main_final_price?: Float // The final price after applying the discount to the main product
	main_price?: Float // The regular price of the main product
}