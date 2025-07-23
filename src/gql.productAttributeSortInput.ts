import {SortEnum} from "./gql.sortEnum";
export type ProductAttributeSortInput = {
	name?: SortEnum // Attribute label: Product Name
	position?: SortEnum // Sort by the position assigned to each product.
	price?: SortEnum // Attribute label: Price
	relevance?: SortEnum // Sort by the search relevance score (default).
}