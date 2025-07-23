import {String} from "./gql.string";
export type CmsBlock = {
	content?: String // The content of the CMS block in raw HTML.
	identifier?: String // The CMS block identifier.
	title?: String // The title assigned to the CMS block.
}