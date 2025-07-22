import { Country } from "./gql.country";
import { Region } from "./gql.region";
export type ReturnShippingAddress = {
    "city": string;
    "contact_name"?: string | null | undefined;
    "country": Country;
    "postcode": string;
    "region": Region;
    "street": string[];
    "telephone": string;
};
