import {CustomerDownloadableProduct} from "./gql.customerDownloadableProduct";
export type CustomerDownloadableProducts = {
	items?: [CustomerDownloadableProduct] // An array of purchased downloadable items.
}